import { memo } from "react";
import NewsFilter from "./WritePostFilter";
import { Field } from "formik";
import { useDispatch } from "react-redux";

export default memo(function WritePostFilters({ values, filters }) {
  const dispatch = useDispatch();

  return (
    <div
      role="group"
      className="flex flex-wrap gap-3 my-6"
      aria-labelledby="my-radio-group"
    >
      {filters.map((el) => {
        return (
          <NewsFilter key={el.value} active={values.theme === el.value}>
            <Field
              type="radio"
              name="theme"
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
  );
});
