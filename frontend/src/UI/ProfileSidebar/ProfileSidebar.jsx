import { memo } from "react";
import ProfileSidebarLogo from "./ProfileSidebarLogo";
import ProfileSidebarFinance from "./ProfileSidebarFinance";
import AddNews from "./AddNews";
import AddEvent from "./AddEvent";

export default memo(function ProfileSidebar({ withLogo = true }) {
  const user_type = localStorage.getItem("user_type");
  return (
    <div className="flex flex-col gap-4 w-4/12 justify-start items-center">
      {/* {user_type === "company" && withLogo ? <AddNews /> : <AddEvent />} */}
      <div className="bg-white py-20 px-4 rounded-3xl flex flex-col gap-10">
        {withLogo && <ProfileSidebarLogo />}
        <ProfileSidebarFinance withLogo={withLogo} />
      </div>
    </div>
  );
});
