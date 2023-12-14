import { memo, useEffect } from "react";
import NewComment from "./NewComment";
import { useDispatch } from "react-redux";
import { getCommentsHook } from "../../hooks/getCommentsHook";
import { addCommentHook } from "../../hooks/addCommentHook";
import getTheme from "../../functions/getTheme";

export default memo(function NewsItem({ newsInfo }) {
  const { data } = getCommentsHook(newsInfo.id);
  const mutation = addCommentHook(newsInfo.id);
  const dispatch = useDispatch();
  useEffect(() => {
    data?.data?.results.forEach((comment) => {
      dispatch({
        type: "news/setComments",
        id: newsInfo.id,
        comment,
      });
    });
  });
  const addComment = (text) => {
    dispatch({
      type: "news/setComments",
      id: newsInfo.id,
      comment: {
        name: "Ду Юлия",
        text,
        id: Math.random() * 100000,
      },
    });
    // mutation.mutate({ id: newsInfo.id, text });
  };
  return (
    <div className="flex flex-col gap-3 bg-white rounded-3xl py-3 px-6 min-h-[400px]">
      <div className="flex gap-4 items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-deep-purple-300"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clipRule="evenodd"
          />
        </svg>
        {newsInfo.name} - {getTheme(newsInfo.theme)}
      </div>
      <div className="w-full flex gap-4">
        <div className="w-1/2 rounded-xl">
          <img src={newsInfo.image} alt="" className="rounded-xl resize-none" />
        </div>
        <div className="bg-zinc-100 py-4 px-4 rounded-xl w-1/2 h-full flex flex-col gap-6">
          <div className="w-full border-b-2 pb-3 border-gray-400">
            <span className="font-bold mr-2">
              {newsInfo.name.toUpperCase()}
            </span>
            <br />
            {newsInfo.description}
          </div>
          <div className="flex flex-col gap-2 max-h-[200px] overflow-y-scroll scroll">
            {newsInfo.comments.map((comment) => (
              <div key={comment.id}>
                <span className="font-bold mr-1">{comment.name}:</span>
                {comment.text}
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <NewComment addComment={addComment} />
          </div>
        </div>
      </div>
    </div>
  );
});
