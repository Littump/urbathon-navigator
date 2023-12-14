import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import { memo } from "react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import WritePostDrop from "../UI/WritePost/WritePostDrop";
import { addNewsHook } from "../hooks/addNewsHook";
import WritePostFilters from "../UI/WritePost/WritePostFilters";

export default memo(function WritePost() {
  const file = useSelector((state) => state.writePost.files);
  const mutation = addNewsHook();
  const loginSchema = Yup.object().shape({
    text: Yup.string().required("введите текст"),
  });
  const filters = [
    { name: "Вода", value: "water", id: 1 },
    { name: "Освещение", value: "light", id: 2 },
    { name: "Газ", value: "gas", id: 3 },
    { name: "Иное", value: "others" },
    { name: "Ремонтные работы", value: "repair", id: 4 },
    { name: "Состояния мест накопления", value: "container_condition", id: 5 },
    { name: "Вывоз ТКО", value: "tko", id: 6 },
    { name: "Улица", value: "street", id: 7 },
  ];
  return (
    <div className="mx-5 rounded-3xl bg-white px-6 py-6">
      <h1 className="text-3xl font-bold">Написать пост</h1>
      <Formik
        initialValues={{
          text: "",
          theme: "gas",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
          mutation.mutate({
            text: values.text,
            file: file[0],
            theme: filters.find(
              (el) => el.value.toLowerCase() == values.theme.toLowerCase()
            ).id,
          });
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched, values }) => (
          <Form className="flex flex-col gap-10 mt-10 pb-20">
            <label className="flex flex-col gap-2 font-semibold">
              Описание
              <WritePostFilters filters={filters} values={values} />
              <Field
                name="text"
                placeholder="текст поста"
                as="textarea"
                rows="6"
                className={
                  "border  rounded-xl py-2 px-4 " +
                  (errors.text && touched.text
                    ? "text-red-500 border-red-500"
                    : "border-indigo-500")
                }
              />
            </label>
            <WritePostDrop />
            <Button type="submit" className="w-1/2 ">
              Отправить пост
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
});
