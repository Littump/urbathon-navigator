import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import { memo } from "react";
import * as Yup from "yup";
import ComplainDrop from "../UI/Complain/ComplainDrop";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default memo(function Complain() {
  const files = useSelector((state) => state.complain.files);
  const navigate = useNavigate();
  const loginSchema = Yup.object().shape({
    text: Yup.string().required("введите имя"),
  });
  return (
    <div className="mx-5 rounded-3xl bg-white px-6 py-6">
      <h1 className="text-3xl font-bold">Жалоба</h1>
      <Formik
        initialValues={{
          text: "",
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          navigate("/");
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-10 mt-10 pb-20">
            <label className="flex flex-col gap-2 font-semibold">
              Опишите жалобу
              <Field
                name="text"
                placeholder="жалоба"
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
            <ComplainDrop />
            <Button type="submit" className="w-1/2 ">
              Отправить жалобу
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
});
