import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import { formatISO } from 'date-fns';
import { SnackbarContext } from '../../SnackbarContext';
import EventForm from './EventForm';

import { CREATE_EVENT_MUTATION } from './model';

const NewEvent = ({ isOpen, handleClose, start, end }) => {
  const { showMessage, showGenericErrorMessage } = useContext(SnackbarContext);

  const [createEvent] = useMutation(CREATE_EVENT_MUTATION);
  const onClose = () => {
    handleClose();
  };

  const handleSave = async (event) => {
    try {
      await createEvent({
        variables: {
          input: {
            title_en: event.title_en,
            content_en: event.content_en,
            title_gr: event.title_gr,
            content_gr: event.content_gr,
            event_start: formatISO(event.event_start),
            event_end: formatISO(event.event_end),
          },
        },
      });
      handleClose();
      showMessage('Event has been successfully created !');
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
        <DialogTitle id="form-dialog-title">Create Event</DialogTitle>
        <DialogContent>
          <EventForm
            event={{ start, end }}
            onClose={onClose}
            onSave={handleSave}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

NewEvent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
};

export default NewEvent;
