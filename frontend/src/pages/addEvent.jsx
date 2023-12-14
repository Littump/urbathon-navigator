import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import { memo } from "react";
import * as Yup from "yup";
import { addNewsHook } from "../hooks/addNewsHook";
import { addEventHook } from "../hooks/addEventHook";

export default memo(function WritePost() {
  const mutation = addEventHook();
  const loginSchema = Yup.object().shape({
    text: Yup.string().required("введите текст"),
    prize: Yup.string().required("введите приз"),
  });

  return (
    <div className="mx-5 rounded-3xl bg-white px-6 py-6">
      <h1 className="text-3xl font-bold">Написать пост</h1>
      <Formik
        initialValues={{
          text: "",
          prize: "",
        }}
        onSubmit={(values) => {
          mutation.mutate({
            text: values.text,
            prize: values.prize,
          });
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched, values }) => (
          <Form className="flex flex-col gap-10 mt-10 pb-20">
            <label className="flex flex-col gap-2 font-semibold w-1/2">
              Описание
              <Field
                name="text"
                placeholder="текст мероприятия"
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
            <label className="flex flex-col gap-2 font-semibold w-1/2">
              Приз
              <Field
                name="prize"
                placeholder="приз"
                type="number"
                min="0"
                max="500"
                className={
                  "border  rounded-xl py-2 px-4 " +
                  (errors.text && touched.text
                    ? "text-red-500 border-red-500"
                    : "border-indigo-500")
                }
              />
            </label>

            <Button type="submit" className="w-1/2 ">
              Отправить пост
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
});
