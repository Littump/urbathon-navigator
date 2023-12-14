import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EventInfo from "../UI/Events/EventInfo";

export default function Event() {
  const { eventId } = useParams();
  const id = eventId;
  const eventsData = useSelector((state) => state.events.events);
  let currentEvent = eventsData.filter((el) => el.id == id);
  currentEvent = currentEvent[0];
  return (
    <div className="bg-white rounded-3xl ml-5 mr-10 min-h-[80vh] h-full py-10 px-10 ">
      <h1 className="font-bold text-3xl">Мероприятия </h1>

      <EventInfo {...currentEvent} />
    </div>
  );
}
