import { memo } from "react";
import NewsBadge from "./NewsBadge";
import NewsFilters from "./NewsFilters";
import NewsTape from "./NewsTape";

export default memo(function News() {
  return (
    <div className="flex flex-col w-8/12 gap-8">
      <NewsBadge />
      <NewsFilters />
      <NewsTape />
    </div>
  );
});
