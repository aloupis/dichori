import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DateFnsUtils from '@date-io/date-fns';
import DeleteConfirmationButton from '../../common/DeleteConfirmationButton';
import { ActionFormButtons } from '../../common/ActionFormButtons';
import { CancelBtn } from '../../common/CancelBtn';
import useForm from '../../useForm';

const useStyles = makeStyles((theme) => ({
  control: { marginBottom: theme.spacing(2) },
}));

const EventForm = ({ event, onClose, onDelete, onSave }) => {
  const classes = useStyles();
  const { values, handleChange, handleBaseChange } = useForm({
    initialValues: event
      ? {
          title_en: event.title_en,
          title_gr: event.title_gr,
          content_en: event.content_en,
          content_gr: event.content_gr,
          event_start: event.start || event.event_start,
          event_end: event.end || event.event_end,
        }
      : {
          title_en: '',
          title_gr: '',
          content_en: '',
          content_gr: '',
          event_start: null,
          event_end: null,
        },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(values);
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div style={{ marginBottom: '15px' }}>
            <Typography variant="h6">English</Typography>
          </div>
          <TextField
            id="title_en"
            name="title_en"
            label="Title"
            variant="outlined"
            className={classes.control}
            onChange={handleChange}
            required
            fullWidth
            value={values.title_en || ''}
          />
          <TextField
            id="content_en"
            name="content_en"
            label="Content"
            variant="outlined"
            className={classes.control}
            onChange={handleChange}
            multiline
            fullWidth
            rows={4}
            value={values.content_en || ''}
          />
        </Grid>
        <Grid item xs={6}>
          <div style={{ marginBottom: '15px' }}>
            <Typography variant="h6">Greek</Typography>
          </div>
          <TextField
            id="title_gr"
            name="title_gr"
            label="Title"
            variant="outlined"
            className={classes.control}
            onChange={handleChange}
            fullWidth
            required
            value={values.title_gr || ''}
          />
          <TextField
            id="content_gr"
            name="content_gr"
            label="Content"
            variant="outlined"
            className={classes.control}
            onChange={handleChange}
            multiline
            fullWidth
            rows={4}
            value={values.content_gr || ''}
          />
        </Grid>
      </Grid>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              required
              margin="normal"
              label="Start Date"
              value={values.event_start}
              onChange={(val) => handleBaseChange('event_start', val)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              id="event_start"
              name="event_start"
              inputVariant="outlined"
              showTodayButton
              ampm={false}
              minutesStep={5}
            />
          </Grid>
          <Grid item xs={6}>
            <KeyboardDateTimePicker
              required
              margin="normal"
              label="End Date"
              value={values.event_end}
              onChange={(val) => handleBaseChange('event_end', val)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              id="event_end"
              name="event_end"
              inputVariant="outlined"
              showTodayButton
              ampm={false}
              minutesStep={5}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid item xs={12}>
        <ActionFormButtons>
          <Box flexGrow={1}>
            {event && (
              <DeleteConfirmationButton
                title="Delete Event"
                explanation="GENERIC.DELETE_MODAL_MESSAGE"
                onConfirm={onDelete}
              />
            )}
          </Box>
          <Box>
            <CancelBtn onClick={onClose}>Cancel</CancelBtn>
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Save
            </Button>
          </Box>
        </ActionFormButtons>
      </Grid>
    </form>
  );
};
EventForm.propTypes = {
  event: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  start: PropTypes.object,
  end: PropTypes.object,
};

export default EventForm;
