import { memo } from "react";
import NewsFilter from "./NewsFilter";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

export default memo(function NewsFilters() {
  const dispatch = useDispatch();
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
    <Formik initialValues={{ picked: "water" }} onSubmit={() => {}}>
      {({ values }) => (
        <Form className="">
          <div
            role="group"
            className="flex flex-wrap gap-3"
            aria-labelledby="my-radio-group"
          >
            {filters.map((el) => {
              return (
                <NewsFilter key={el.value} active={values.picked === el.value}>
                  <Field
                    type="radio"
                    name="picked"
                    value={el.value}
                    className="hidden"
                    onClick={() => {
                      dispatch({ type: "news/setFilter", filter: el.value });
                    }}
                  />
                  {el.name}
                </NewsFilter>
              );
            })}
          </div>
        </Form>
      )}
    </Formik>
  );
});
