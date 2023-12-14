import MyChats from "../UI/MyChats/MyChats";
import Chat from "../UI/MyChats/Chat";
import { useParams } from "react-router-dom";

export default function MessagesOpened() {
  const { chatId } = useParams();
  const id = chatId;
  return (
    <div className="w-full flex gap-8 font-raleway px-6">
      <MyChats />
      <div className="bg-deep-purple-50 w-7/12 min-h-[80vh] rounded-3xl flex flex-col overflow-hidden">
        <Chat id={id} />
      </div>
    </div>
  );
}
