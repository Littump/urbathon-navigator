import { Typography } from "@material-tailwind/react";
import SidebarFooter from "./SidebarFooter";
import SidebarNav from "./SidebarNav";
import { NavLink } from "react-router-dom";
import { memo } from "react";

export default memo(function Sidebar() {
  return (
    <div className="h-[100vh] flex flex-col justify-between sticky top-0 left-0 shadow-sm">
      <div>
        <NavLink className="mb-2 p-4 w-full text-center " to="/">
          <Typography
            variant="h5"
            color="blue-gray"
            className="hover:text-deep-purple-500 transition"
          >
            Навигатор чистоты
          </Typography>
        </NavLink>

        <SidebarNav />
      </div>
      <div className="pb-8 pl-4">
        <SidebarFooter />
      </div>
    </div>
  );
});
