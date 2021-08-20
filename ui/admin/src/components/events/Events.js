import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import fromUnixTime from 'date-fns/fromUnixTime';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import addDays from 'date-fns/addDays';
import startOfDay from 'date-fns/startOfDay';
import isSameDay from 'date-fns/isSameDay';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import el from 'date-fns/locale/el';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PageWrapper from '../../common/PageWrapper';
import { SnackbarContext } from '../../SnackbarContext';
import Loading from '../../common/Loading';
import { EVENTS_QUERY } from './model';
import NewEvent from './NewEvent';
import EditEvent from './EditEvent';

const locales = {
  'en-GB': enGB,
  el,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Events = () => {
  const defaultView = Views.MONTH;

  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [selectedSlotStart, setSelectedSlotStart] = useState(null);
  const [selectedSlotEnd, setSelectedSlotEnd] = useState(null);
  const [currentView, setCurrentView] = useState(defaultView);

  const customEventStyle = (event, view) => {
    if (view === 'agenda') {
      return;
    }
    return {
      style: {
        backgroundColor: '#007ac2',
        border: '0px',
      },
    };
  };

  const handleSelect = ({ start, end }) => {
    let endMoment = end;
    const startOfEndDay = startOfDay(end);

    if (isSameDay(endMoment, startOfEndDay)) {
      endMoment = addDays(endMoment, 1);
    }

    setSelectedSlotStart(new Date(start));
    setSelectedSlotEnd(endMoment);

    setOpenCreate(true);
  };

  const handleCreateClose = () => {
    setOpenCreate(false);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setOpenEdit(true);
  };

  const { showGenericErrorMessage } = useContext(SnackbarContext);

  const { data, loading, error } = useQuery(EVENTS_QUERY, {
    fetchPolicy: 'cache-and-network',
  });

  const events =
    data?.events?.map((x) => ({
      ...x,
      title: x.title_en,
      event_start: new Date(fromUnixTime(x.event_start / 1000)),
      event_end: new Date(fromUnixTime(x.event_end / 1000)),
    })) || [];

  if (error) {
    showGenericErrorMessage();
    return null;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <PageWrapper title="Events">
      <NewEvent
        handleClose={handleCreateClose}
        isOpen={openCreate}
        start={selectedSlotStart}
        end={selectedSlotEnd}
      />
      <EditEvent
        event={selectedEvent}
        handleClose={handleEditClose}
        isOpen={openEdit}
      />
      <Calendar
        culture="en"
        style={{ minHeight: '400px' }}
        selectable
        localizer={localizer}
        events={events}
        startAccessor="event_start"
        endAccessor="event_end"
        defaultView={defaultView}
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventSelect}
        // components={{
        //   toolbar: CustomCalendarToolbar,
        //   agenda: {
        //     event: CustomEventAgenda,
        //   },
        // }}
        eventPropGetter={(event) => customEventStyle(event, currentView)}
        onView={(view) => setCurrentView(view)}
        showMultiDayTimes
      />
    </PageWrapper>
  );
};

export default Events;
