
import MyChats from "../UI/MyChats/MyChats";

export default function Messages() {
  return (
    <div className="w-full flex gap-8 font-raleway px-6">
      <MyChats />
      <div className="bg-deep-purple-50 w-7/12 min-h-[80vh] rounded-3xl flex flex-col overflow-hidden"></div>
    </div>
  );
}
