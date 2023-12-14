import { memo } from "react";
import badge from "../../assets/news_badge.png";

export default memo(function NewsBadge() {
  return (
    <div className="w-full bg-indigo-500 rounded-3xl text-white p-6 flex items-center gap-20">
      <div className="w-7/12 flex flex-col gap-4">
        <h1 className="heading">
          Учавствуй 11.11 в проекте “Чистый город - чистая душа”{" "}
        </h1>
        <p className="text">Проект проходит на ст. м. Пионерская в 11.00</p>
        <div>
          <p className="text-light">Взять с собой:</p>
          <ul className="text-light ml-4 list-disc">
            <li>Семью</li>
            <li>Воду</li>
            <li>Перчатки</li>
          </ul>
        </div>
      </div>
      <img className="w-28 h-28" src={badge} alt="" />
    </div>
  );
});
