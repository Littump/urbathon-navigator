import { memo } from "react";
import NewsItem from "./NewsItem";
import { useDispatch, useSelector } from "react-redux";
import { getNewsHook } from "../../hooks/getNewsHook";

export default memo(function NewsTape() {
  const { data } = getNewsHook();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.news.filter);
  data?.data?.results?.forEach((post) => {
    dispatch({
      type: "news/addNews",
      news: {
        ...post,
        name: post.company,
        description: post.text,
        image: post.images[0],
      },
    });
  });

  const newsList = useSelector((state) => state.news.news);
  console.log(newsList);
  return (
    <div className="grid grid-cols-1 gap-10 mb-20">
      <h2 className="heading">Новости</h2>
      <div className="flex flex-col gap-6">
        {newsList.map((newsItem) => {
          if (newsItem.theme !== filter) return null;
          return <NewsItem key={newsItem.id} newsInfo={newsItem} />;
        })}
      </div>
    </div>
  );
});
