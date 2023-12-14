import { memo } from "react";
import ResponsesCompany from "./ResponsesCompany";
import { useSelector } from "react-redux";
import getThemeName from "../../functions/getThemeName";

export default memo(function ResponsesCompanies({ filter }) {
  const companies = useSelector((state) => state?.companies?.companies);
  const companitesComponent = companies?.map((company) => {
    if (filter.indexOf(getThemeName(company.activity)) === -1) return null;
    return <ResponsesCompany key={company.id} companyInfo={company} />;
  });
  return (
    <div className="flex gap-6 flex-wrap max-w-3xl">{companitesComponent}</div>
  );
});
