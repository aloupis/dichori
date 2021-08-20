import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { formatISO } from 'date-fns';
import { SnackbarContext } from '../../SnackbarContext';
import EventForm from './EventForm';

import { UPDATE_EVENT_MUTATION, DELETE_EVENT_MUTATION } from './model';

const EditEvent = ({ event, isOpen, handleClose }) => {
  const { showMessage, showGenericErrorMessage } = useContext(SnackbarContext);

  const [updateEvent] = useMutation(UPDATE_EVENT_MUTATION);
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION);

  const onClose = () => {
    handleClose();
  };

  const handleSave = async (evt) => {
    try {
      await updateEvent({
        variables: {
          id: +event.id,
          set: {
            title_en: evt.title_en,
            content_en: evt.content_en,
            title_gr: evt.title_gr,
            content_gr: evt.content_gr,
            event_start: formatISO(evt.event_start),
            event_end: formatISO(evt.event_end),
          },
        },
      });
      handleClose();
      showMessage('Event has been successfully updated !');
    } catch (err) {
      console.log(err);
      showGenericErrorMessage();
    }
  };

  const handleDelete = async () => {
    try {
      const res = await deleteEvent({ variables: { id: +event.id } });
      handleClose();
      if (res?.data?.delete_event?.success) {
        showMessage('Event has been successfully deleted!');
      } else {
        showGenericErrorMessage();
      }
    } catch (err) {
      console.log(err);
      showGenericErrorMessage();
    }
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Event</DialogTitle>
        <DialogContent>
          <EventForm
            event={event}
            onClose={onClose}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

EditEvent.propTypes = {
  event: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditEvent;
