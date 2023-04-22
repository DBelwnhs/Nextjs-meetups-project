import { getFeaturedEvents } from "../dummy-data";
import EventList from "../compontents/events/Event-list";
function HomePage() {
    const featuredEvents = getFeaturedEvents();
    
  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  );
}

export default HomePage;
