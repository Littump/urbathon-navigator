import { memo } from "react";
import { NavLink } from "react-router-dom";

export default memo(function ResponsesCompany({ companyInfo }) {
  return (
    <NavLink to={companyInfo.id.toString()}>
      <div className="overflow-hidden h-20 flex hover:border-black transition justify-center items-centertransition  font-bold text-lg border-2 border-indigo-500 rounded-xl">
        <img src={companyInfo.logo} alt="" />
      </div>
    </NavLink>
  );
});
