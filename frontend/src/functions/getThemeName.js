export default function getTheme(theme) {
  const themes = {
    1: "water",
    2: "light",
    3: "gas",
    4: "warm",
    5: "street",
    6: "repair",
    7: "tko",
    8: "container_condition",
    9: "others",
  };
  return themes[theme];
}
