import { Field } from "formik";
import { memo } from "react";
import NewsFilter from "../News/NewsFilter";

export default memo(function ResponsesFilters({ filter }) {
  const filters = [
    { name: "Вода", value: "water" },
    { name: "Освещение", value: "light" },
    { name: "Газ", value: "gas" },
    { name: "Иное", value: "others" },
    { name: "Ремонтные работы", value: "repair" },
    { name: "Состояния мест накопления", value: "container_condition" },
    { name: "Вывоз ТКО", value: "tko" },
    { name: "Улица", value: "street" },
  ];
  return (
    <div
      role="group"
      className="flex flex-wrap gap-3"
      aria-labelledby="my-radio-group"
    >
      {filters.map((el) => {
        return (
          <NewsFilter key={el.value} active={filter === el.value}>
            <Field
              type="radio"
              name="filter"
              value={el.value}
              className="hidden"
            />
            {el.name}
          </NewsFilter>
        );
      })}
    </div>
  );
});
