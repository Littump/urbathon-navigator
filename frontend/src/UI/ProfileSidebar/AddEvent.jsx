import { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function AddEvent() {
  return (
    <NavLink
      to="/addEvent"
      className="w-full bg-white rounded-3xl p-4 border-2 border-indigo-500 "
    >
      <div className="bg-addpost w-full h-52 my-0.5 bg-contain text-2xl bg-no-repeat p-6 flex-col gap-6 text-center flex items-center justify-center font-bold text-white">
        Создать мероприятие
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </NavLink>
  );
});
