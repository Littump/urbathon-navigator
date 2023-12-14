import NavbarProfile from "./NavbarProfile";
import { memo, useEffect, useState } from "react";

export default memo(function Navbar() {
  let [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const winScroll = document.documentElement.scrollTop;
        if (winScroll !== 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      { passive: true }
    );

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div
      className={
        "w-full flex gap-10 items-center sticky z-20 top-0 right-0 py-3 px-5 backdrop-blur-3xl bg-opacity-80 " +
        (isScrolled ? "bg-white" : "")
      }
    >
      <div className="flex gap-7 items-center">
        <NavbarProfile />
      </div>
    </div>
  );
});
