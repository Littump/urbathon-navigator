import { memo } from "react";

export default memo(function WritePostFilter({ children, active }) {
  return (
    <label>
      <div
        className={
          "py-2 px-6 hover:shadow-md transition cursor-pointer font-bold rounded-full w-full flex items-center justify-center h-12 text-[12px] " +
          (active ? " bg-deep-purple-400 text-white" : "bg-gray-100 text-black")
        }
      >
        {children}
      </div>
    </label>
  );
});
