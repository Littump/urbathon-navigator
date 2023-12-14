
import News from "../UI/News/News";
import ProfileSidebar from "../UI/ProfileSidebar/ProfileSidebar";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 font-raleway">
      <div className="w-full px-6 flex gap-6">
        <News />
        <ProfileSidebar />
      </div>
    </div>
  );
}
