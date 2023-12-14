import MessagesBlock from "../UI/MessagesBlock";
import CompanyInfo from "../UI/CompanyInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ResponsesChat() {
  // получаем param по нему получаем сообщения и название, лого
  const { companyId } = useParams();
  const id = companyId;
  let companyInfo = useSelector((state) => state.companies.companies);
  companyInfo = companyInfo.filter((el) => el.id == id)[0];
  const messages = useSelector((state) => state.companies.messages);
  const addMessage = (text) => {
    alert(text);
  };
  return (
    <div className="flex gap-0 mx-5 min-h-[80vh]">
      <div className="bg-deep-purple-50 w-7/12 rounded-tl-3xl rounded-bl-3xl flex flex-col overflow-hidden">
        <div className="w-full bg-deep-purple-50 h-24 text-white text-2xl flex items-center py-6 px-10 justify-between">
          <h1 className="text-xl font-bold text-black">ВОДОСНАБЖЕНИЕ</h1>
        </div>
        <div className="divider"></div>
        <MessagesBlock messages={messages} addMessage={addMessage} />
      </div>
      <div className="w-5/12 h-full min-h-[80vh]">
        <CompanyInfo companyInfo={companyInfo} />
      </div>
    </div>
  );
}
