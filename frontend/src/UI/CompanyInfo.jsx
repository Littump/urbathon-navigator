import { memo } from "react";
import { useNavigate } from "react-router-dom";

export default memo(function CompanyInfo({ companyInfo }) {
  console.log(companyInfo);
  const navigate = useNavigate();
  if (companyInfo === undefined) {
    navigate("/responses/");
  }
  return (
    <div className="flex flex-col gap-8 min-h-[85vh] font-raleway py-4 px-4 rounded-tr-3xl rounded-br-3xl h-full justify-start w-full bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-black font-bold">{companyInfo?.name}</h1>
        <img src={companyInfo?.logo} alt="" className="w-24 " />
      </div>
      <div className="w-2/3">
        <p className="light-text text-sm">
          {companyInfo?.description}, {companyInfo?.address}
        </p>
      </div>
      <div className="text-deep-purple-500 flex flex-col gap-6 text-sm">
        <div className="flex flex-col">
          <span className="font-bold">Телефон: </span>
          {companyInfo?.phone}
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Режим работы: </span>
          пн-сб с 8.00 до 20.30
        </div>
        <div className="flex flex-col">
          <span className="font-bold">Оффициальный сайт: </span>
          <a href="https://eirc.spb.ru/company/about/">Общая информация</a>
        </div>
      </div>
    </div>
  );
});
