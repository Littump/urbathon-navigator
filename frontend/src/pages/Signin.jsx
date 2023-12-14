import { Button } from "@material-tailwind/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { loginHook } from "../hooks/loginHook";

export default function Signin() {
  const auth_token = localStorage.getItem("auth_token");
  const mutation = loginHook();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth_token !== null) {
      navigate("/settings");
    }
  }, [auth_token]);

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "слишком короткий!")
      .max(50, "слишком длинный!")
      .required("введите пароль"),
  });
  return (
    <div className={"bg-signin relative h-[100vh] overflow-hidden flex gap-2"}>
      <div className="w-full h-20 bg-white fixed top-0 left-0 py-4 px-10 flex items-center font-black">
        Навигатор чистоты
      </div>
      <div className="absolute top-1/2 left-52 text-5xl text-white font-body">
        Добро пожаловать!
      </div>
      <Formik
        initialValues={{ phone: "", password: "" }}
        onSubmit={(values) => {
          mutation.mutate(values);
        }}
        validationSchema={loginSchema}
      >
        {() => (
          <Form className=" flex gap-4 flex-col h-[500px] bg-white border-2 border-indigo-500 w-[400px] py-10 px-6 ml-auto mr-64 mt-24 rounded-3xl">
            <h1 className="text-3xl text-indigo-500 font-bold">Вход</h1>
            <label className="flex flex-col gap-2 ">
              Логин
              <Field
                name="phone"
                placeholder="номер телефона или логин"
                className="border-2 border-indigo-500 rounded-xl py-2 px-4"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600"
              />
            </label>
            <label className="flex flex-col gap-2">
              Пароль:
              <Field
                type="password"
                name="password"
                placeholder="пароль"
                className="border-2 border-indigo-500 rounded-xl py-2 px-4"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />
            </label>
            <Button type="submit" className="w-full">
              Войти
            </Button>
            <NavLink to="/signup" className="mx-auto">
              нет аккаунта?
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}
