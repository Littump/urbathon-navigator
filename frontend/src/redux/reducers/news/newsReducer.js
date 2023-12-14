import { createReducer } from "@reduxjs/toolkit";
import { addNews, setComments, setFilter } from "./newsAction.js";
import image1 from "../../../assets/news.png";
import image2 from "../../../assets/news2.jpg";
import image3 from "../../../assets/news3.jpg";
import image4 from "../../../assets/news4.jpeg";
import avatar from "../../../assets/avatar.png";

const initialState = {
  news: [
    {
      name: "Жк ботаник",
      image: image1,
      theme: "water",
      avatar,
      id: 0,
      description: "даже дети помогают",
      comments: [
        { name: "вася", text: "круто", id: 1 },
        { name: "вася", text: "круто", id: 2 },
      ],
    },
    {
      name: "Жк 2 столицы",
      image: image2,
      theme: "others",
      avatar,
      id: 1,
      description:
        '🏡 Привет, дорогие жители! УК "Орджоникидзевская ужк" рада сообщить вам о запланированных мероприятиях по улучшению придомовых территорий. Ваш комфорт — наш приоритет! 💙',
      comments: [],
    },
    {
      name: "Жк звездное",
      image: image2,
      theme: "light",
      avatar,
      id: 2,
      description:
        "🌟 Верх-исетская управляющая компания готова предложить вам инновационные решения по улучшению инфраструктуры нашего района. Вместе мы делаем наше жилье лучше! 💪",
      comments: [],
    },
    {
      name: "Жк олимп",
      image: image3,
      theme: "others",
      avatar,
      id: 3,
      description:
        "Приглашаем вас принять участие в обсуждении планов улучшения общественных пространств в нашем районе. Ваш голос важен!",
      comments: [],
    },
  ],
  filter: "water",
};

export default createReducer(initialState, (builder) => {
  builder.addCase(addNews, (state, action) => {
    state.news = [...state.news, action.news];
  });
  builder.addCase(setComments, (state, action) => {
    state.news[action.id].comments = [
      ...state.news[action.id].comments,
      action.comment,
    ];
  });
  builder.addCase(setFilter, (state, action) => {
    state.filter = action.filter;
  });
});
