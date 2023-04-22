import EventItem from './Event-item.js'
import classes from './event-list.module.css'

function EventList(props) {
  const { items } = props;

  if (!items || !items.length) {
    return <p>No events found</p>;
  }

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;