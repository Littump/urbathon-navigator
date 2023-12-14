import { useDispatch, useSelector } from "react-redux";
import EventsList from "../UI/Events/EventsList";
import ProfileSidebar from "../UI/ProfileSidebar/ProfileSidebar";
import { getEventsHook } from "../hooks/getEventsHook";
import { useEffect } from "react";

export default function Events() {
  const { data } = getEventsHook();
  const dispatch = useDispatch();
  useEffect(() => {
    data?.data?.results?.forEach((event) =>
      dispatch({
        type: "events/addEvent",
        event: { ...event, money: event.prize },
      })
    );
  });
  const eventsData = useSelector((state) => state.events.events);
  return (
    <div className="flex gap-4 px-4">
      <div className="w-8/12">
        <EventsList events={eventsData} />
      </div>
      <ProfileSidebar events={eventsData} withLogo={false} />
    </div>
  );
}
