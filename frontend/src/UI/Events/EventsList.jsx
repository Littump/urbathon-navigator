import { memo } from "react";
import EventsItem from "./EventsItem";

export default memo(function EventsList({ events }) {
  const eventsListComponent = events.map((el) => {
    return <EventsItem {...el} key={el.id} />;
  });
  return (
    <div className="bg-white rounded-3xl w-full h-full py-10 px-6">
      <h1 className="font-bold text-3xl">Мероприятия </h1>
      <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-10">
        {eventsListComponent}
      </div>
    </div>
  );
});
