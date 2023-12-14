import { memo } from "react";

export default memo(function ProfileSidebarFinanceItem({ date, text, money }) {
  return (
    <div className="flex gap-4  items-center">
      <div className="text font-semibold">{date}</div>
      <div className="text">{text}</div>
      <div className="font-bold text-light-green-800">+{money}₽</div>
    </div>
  );
});
