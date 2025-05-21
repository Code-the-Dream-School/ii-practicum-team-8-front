import EventCalendarPropType from '../../propTypes/EventCalendarPropType';
import Paper from '@mui/material/Paper';

const EventComponent = ({ event }) => {
  return (
    <Paper
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        width: '100%',
        height: '100%',
        padding: 1,
        margin: 0,
        cursor: 'pointer',
      }}
    >
      {event.title}
    </Paper>
  );
};

EventComponent.propTypes  = {
  event: EventCalendarPropType.isRequired 
};

export default EventComponent;
