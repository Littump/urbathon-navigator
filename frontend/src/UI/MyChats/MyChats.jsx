import { Form, Formik } from "formik";
import { memo, useEffect } from "react";
import Search from "../Search";
import Chat from "./ChatListItem";
import { List } from "@material-tailwind/react";
import { getChatsHook } from "../../hooks/getChatsHook";
import { useDispatch, useSelector } from "react-redux";

export default memo(function MyChats() {
  const { data } = getChatsHook();
  const dispatch = useDispatch();
  // массив чатов название, id
  useEffect(() => {
    dispatch({ type: "chat/setChatList", chatList: data?.data?.results });
  }, [data]);

  // const chats_data = useSelector((state) => state.chat.chatList);
  const chats_data = [
    {
      name: "Общий по дому",
      id: 1,
    },
  ];
  return (
    <Formik
      initialValues={{ findChat: "" }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form className="bg-white w-1/3  min-h-[80vh] rounded-3xl flex flex-col">
          <div className="py-6 px-10">
            <Search name="findChat" placeholder="найти группу" />
          </div>
          <div>
            <div className="divider mb-1"></div>
            <List className="pr-0 py-0 pl-1">
              {chats_data === undefined
                ? "у вас нет чатов"
                : chats_data?.map((chat) => {
                    if (
                      chat.name
                        .toLowerCase()
                        .indexOf(values.findChat.toLowerCase()) === -1
                    )
                      return null;
                    return <Chat name={chat.name} key={chat.id} id={chat.id} />;
                  })}
            </List>
          </div>
        </Form>
      )}
    </Formik>
  );
});
