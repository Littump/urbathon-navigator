import { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function EventsItem({ date, money, text, company, id }) {
  return (
    <NavLink
      to={id.toString()}
      className="w-full h-40 bg-blue-400 transition text-white hover:bg-blue-300 flex flex-col gap-8 items-center justify-center rounded-3xl"
    >
      <div className="flex justify-between text w-full px-6">
        <span>{date}</span>
        <span>{company}</span>
        <span className="font-bold text-lime-400">+{money}₽</span>
      </div>
      <h1 className="text-xl font-bold px-6">{text.substr(0, 50)}...</h1>
    </NavLink>
  );
});
