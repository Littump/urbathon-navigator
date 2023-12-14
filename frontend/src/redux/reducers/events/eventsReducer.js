import { createReducer } from "@reduxjs/toolkit";
import { addEvent } from "./eventsAction.js";
import eventImage from "../../../assets/event.png";
const initialState = {
  events: [
    {
      date: "01.11",
      money: 97,
      text: 'Присоединяйтесь к нам в посадке новых деревьев в парке "Лесной". Вместе мы создаем зеленые оазисы в нашем городе.',
      name: "Юго-западный лесопарк",
      toHaveWithYou: ["Вода", "Перчатки"],
      address: "Юго-западный лесопарк",
      id: 1,
      image: eventImage,
    },
    {
      date: "01.11",
      money: 120,
      text: "Давайте вместе сделаем берега реки Исеть чище и поддержим экологическую чистоту в водных бассейнах.",
      name: "Юго-западный лесопарк",
      toHaveWithYou: ["Вода", "Перчатки"],
      address: "Юго-западный лесопарк",
      id: 2,
      image: eventImage,
    },
    {
      date: "01.11",
      money: 150,
      text: "Приглашаем всех на лекцию от экологов о важности охраны биоразнообразия. Обсудим, как каждый может внести свой вклад.",
      name: "Юго-западный лесопарк",
      toHaveWithYou: ["Вода", "Перчатки"],
      address: "Юго-западный лесопарк",
      id: 3,
      image: eventImage,
    },
    {
      date: "01.11",
      money: 200,
      text: "Примите участие в велопараде, чтобы поддержать использование экологичных видов транспорта и пропагандировать заботу о воздухе.",
      name: "Юго-западный лесопарк",
      toHaveWithYou: ["Вода", "Перчатки"],
      address: "Юго-западный лесопарк",
      id: 4,
      image: eventImage,
    },
    {
      date: "01.11",
      money: 250,
      text: "В этот день предлагаем собраться и провести уборку города от мусора, чтобы подчеркнуть важность чистоты воздуха для здоровья.",
      name: "Юго-западный лесопарк",
      toHaveWithYou: ["Вода", "Перчатки"],
      address: "Юго-западный лесопарк",
      id: 5,
      image: eventImage,
    },
    {
      date: "01.11",
      money: 115,
      text: "Посетите наш экофестиваль, где местные художники представят свои работы, созданные из вторсырья, чтобы показать, что даже мусор может быть искусством.",
      name: "Юго-западный лесопарк",
      toHaveWithYou: ["Вода", "Перчатки"],
      address: "Юго-западный лесопарк",
      id: 6,
      image: eventImage,
    },
  ],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(addEvent, (state, action) => {
    state.events = [...state.events, action.event];
  });
});
