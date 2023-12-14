import { Button } from "@material-tailwind/react";
import { memo, useState } from "react";
import ComplainLink from "../Complain/ComplainLink.jsx";
export default memo(function EventInfo({ date, money, text, address, image }) {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const imageBlock = image && <img src={image} className="w-56" alt="" />;
  return (
    <div className="flex gap-32 mt-10">
      <div className="flex gap-10 flex-col w-7/12 ">
        <div className="flex gap-6">
          <h2 className="text-lg font-bold">{text}</h2>
          <span className="font-bold text-light-green-500">+{money}₽</span>
        </div>
        <h2>
          На мероприятие проходить в{" "}
          <span className="font-bold">
            {address} {date} 2023 г.
          </span>
        </h2>
        <Button
          className={
            "rounded-3xl " +
            (isSubscribe ? "bg-green-500" : "bg-indigo-500 hover:bg-indigo-600")
          }
          onClick={() => {
            if (!isSubscribe) setIsSubscribe(true);
            else if (confirm("Точно хотите отказаться от меропрития?")) {
              setIsSubscribe(false);
            }
          }}
        >
          {!isSubscribe ? "Записаться" : "Вы успешно записаны"}
        </Button>
        <ComplainLink />
      </div>
      <div className="w-5/12">{imageBlock}</div>
    </div>
  );
});
