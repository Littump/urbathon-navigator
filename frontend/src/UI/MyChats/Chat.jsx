import { memo, useEffect, useState } from "react";
import avatar from "../../assets/big_avatar.png";
import MessagesBlock from "../MessagesBlock";
import { useDispatch, useSelector } from "react-redux";
import { addMessageHook } from "../../hooks/addMessageHook";
import { getMessagesHook } from "../../hooks/getMessagesHook";

export default memo(function Chat({ id }) {
  const [messages, setMessages] = useState([]);
  const { data } = getMessagesHook(id);
  const mutation = addMessageHook(id);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({ type: "chat/clearChat" });
  //   data?.data?.results?.forEach((el) => {
  //     dispatch({ type: "chat/addMessage", message: { ...el } });
  //   });
  // }, [data]);
  // let chat = useSelector((state) => state.chat);
  // let current_chat = chat?.chatList?.filter((el) => el.id == id);
  // const addMessage = (text) => {
  //   mutation.mutate(text);
  // };
  // if (chat.chatList === undefined) {
  //   return null;
  // }
  const add_message = (text) =>
    setMessages((prev) => [
      ...prev,
      {
        isMe: true,
        id: Math.random() * 10000,
        name: "Ду Юля",
        text,
      },
    ]);
  const current_chat = [
    {
      name: "Общий по дому",
      messages,
    },
  ];
  console.log(current_chat);
  return (
    <>
      <div className="w-full bg-deep-purple-300 h-32 text-white text-2xl flex items-center py-6 px-10 justify-between">
        {current_chat[0]?.name}
        <img src={avatar} alt="" className="h-16 w-16" />
      </div>

      <MessagesBlock
        messages={current_chat[0]?.messages}
        addMessage={add_message}
      />
    </>
  );
});
