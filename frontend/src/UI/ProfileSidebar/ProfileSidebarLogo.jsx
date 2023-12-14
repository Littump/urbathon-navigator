import { memo } from "react";
import avatar from "../../assets/big_avatar.png";

export default memo(function ProfileSidebarLogo() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img src={avatar} alt="avatar" className="w-28 h-28" />
      <div className="flex flex-col items-center text-center gap-3 ">
        <h2 className="heading font-bold">Ду Юлия</h2>
        <p className="text">my.team@mail.ru</p>
      </div>
    </div>
  );
});
