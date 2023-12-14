export default function getTheme(theme) {
  const themes = {
    water: "Вода",
    light: "Освещение",
    gas: "Газ",
    warm: "Отопление",
    street: "Улица",
    repair: "Ремонтные работы",
    tko: "Вывоз ТКО",
    container_condition: "Состояния мест накопления",
    others: "Иное",
  };
  return themes[theme.toLowerCase()];
}
