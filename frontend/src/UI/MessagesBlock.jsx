import { memo, useEffect, useRef } from "react";
import Write from "./Write";
import { Form, Formik } from "formik";

export default memo(function MessagesBlock({ messages, addMessage }) {
  const messagesRef = useRef(null);

  useEffect(() => {
    const lastItem = messagesRef.current.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ block: "nearest" });
    }
  }, []);

  const messagesComponent = messages?.map((message) => {
    return (
      <div
        className={"chat " + (message.isMe ? "chat-end" : "chat-start")}
        key={message.id}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-blue-300"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble bg-white text-black font-medium">
          {message.text}
        </div>
      </div>
    );
  });
  return (
    <div className="flex flex-col gap-1 font-raleway">
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values, { resetForm }) => {
          if (values.message === "") return;
          addMessage(values.message);
          setTimeout(
            () =>
              messagesRef.current.scrollBy({
                top: 200,
                left: 0,
                behavior: "smooth",
              }),
            50
          );

          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form className=" bg-deep-purple-50 w-full px-4 rounded-3xl flex flex-col ">
            <div
              className="h-[55vh] overflow-scroll hidden-scroll"
              ref={messagesRef}
            >
              {messagesComponent}
            </div>
            <div className="pb-6">
              <Write
                name="message"
                placeholder="Сообщение"
                handleSubmit={handleSubmit}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});
