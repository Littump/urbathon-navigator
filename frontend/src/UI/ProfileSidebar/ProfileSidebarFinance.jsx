import { memo } from "react";
import ProfileSidebarFinanceGraph from "./ProfileSidebarFinanceGraph";
import ProfileSidebarFinanceItem from "./ProfileSidebarFinanceItem";

export default memo(function ProfileSidebarFinance({ withLogo = true }) {
  const money_history = [
    { date: "01.01", text: "Участие в сборке мусора на Мурино1", money: "150" },
  ];
  return (
    <div
      className={
        "flex flex-col gap-4  w-full px-4 rounded-2xl items-center py-10 " +
        (withLogo && " bg-zinc-100")
      }
    >
      <div className="w-52 h-52">
        <ProfileSidebarFinanceGraph />
      </div>
      <div className="h-[2px] w-full bg-gray-300"></div>
      <div className="flex flex-col gap-6">
        {money_history.map((el) => (
          <ProfileSidebarFinanceItem
            key={el.text}
            money={el.money}
            date={el.date}
            text={el.text}
          />
        ))}
      </div>
    </div>
  );
});
