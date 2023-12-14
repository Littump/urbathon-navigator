import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { useEffect } from "react";

const Layout = ({ children }) => {
  let auth_token = localStorage.getItem("auth_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (auth_token === null) {
      navigate("/signin");
    }
  }, [auth_token]);
  return (
    <div className="flex gap-1">
      <div className="w-60">
        <Sidebar />
      </div>
      <div className="w-full bg-slate-100">
        <Navbar />
        <div className="mt-4">{children ?? <Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
