import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SigninDrop from "../UI/SigninDrop";
import { signUpHook } from "../hooks/signUpHook";
import { companySignupHook } from "../hooks/companySignUpHook";
import { useSelector } from "react-redux";

export default function Signin() {
  const auth_token = localStorage.getItem("auth_token");
  const companyLogo = useSelector((state) => state.signin);
  let mutationUser = signUpHook();
  let mutationCompany = companySignupHook();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth_token !== null) {
      navigate("/settings");
    }
  }, [auth_token]);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const loginSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, "некорректно ввёден номер телефона")
      .required("введите номер телефона"),
    mail: Yup.string().email("некорректный email").required("Введите email"),
    name: Yup.string().required("введите имя"),
    address: Yup.string().required("введите адрес"),
  });
  return (
    <div
      className={"bg-signin relative min-h-[100vh] overflow-hidden flex gap-2"}
    >
      <div className="w-full h-20 bg-white fixed top-0 left-0 py-4 px-10 flex items-center font-black">
        Навигатор чистоты
      </div>
      <div className="absolute top-1/2 left-52 text-5xl text-white font-body">
        Добро пожаловать!
      </div>
      <Formik
        initialValues={{
          phone: "",
          password: "",
          address: "",
          mail: "",
          picked: "user",
          name: "",
          description: "",
          logo: companyLogo,
        }}
        onSubmit={(values) => {
          if (values.picked === "user") mutationUser.mutate(values);
          if (values.picked === "company")
            mutationCompany.mutate({ ...values, logo: companyLogo });
        }}
        validationSchema={loginSchema}
      >
        {({ values, errors, touched }) => (
          <Form className=" flex gap-4 flex-col bg-white border-2 border-indigo-500 w-[400px] py-6 px-6 ml-auto mr-64 mt-24 mb-10 rounded-3xl">
            <h1 className="text-3xl text-indigo-500 font-bold">Регистрация</h1>

            <div
              role="group"
              className="flex gap-4"
              aria-labelledby="my-radio-group"
            >
              <label
                className={
                  "cursor-pointer hover:bg-indigo-500 hover:text-white transition border-2 py-2 px-3 border-indigo-500 rounded-xl " +
                  (values.picked === "user" ? "bg-indigo-500 text-white" : " ")
                }
              >
                <Field
                  type="radio"
                  name="picked"
                  value="user"
                  className="hidden"
                />
                Пользователь
              </label>
              <label
                className={
                  "cursor-pointer hover:bg-indigo-500 hover:text-white transition border-2 py-2 px-3 border-indigo-500 rounded-xl " +
                  (values.picked === "company"
                    ? "bg-indigo-500 text-white"
                    : " ")
                }
              >
                <Field
                  type="radio"
                  name="picked"
                  value="company"
                  className="hidden"
                />
                Компания
              </label>
            </div>
            <h3 className="mt-4 font-bold">Логотип</h3>
            <div>{values.picked === "company" ? <SigninDrop /> : ""}</div>
            <label className="flex flex-col gap-2 ">
              <Field
                name="name"
                placeholder={
                  values.picked === "company"
                    ? "Название организации"
                    : "Имя Фамилия"
                }
                className={
                  "border  rounded-xl py-2 px-4 " +
                  (errors.name && touched.name
                    ? "text-red-500 border-red-500"
                    : "border-indigo-500")
                }
              />
            </label>
            <label className="flex flex-col gap-2 ">
              <Field
                placeholder="Номер телефона"
                name="phone"
                className={
                  "border  rounded-xl py-2 px-4 " +
                  (errors.phone && touched.phone
                    ? "text-red-500 border-red-500"
                    : "border-indigo-500")
                }
              />
            </label>
            {values.picked === "company" ? (
              <label className="flex flex-col gap-2">
                <Field
                  placeholder="описание"
                  as="textarea"
                  rows="3"
                  name="description"
                  className={
                    "border  rounded-xl py-2 px-4 " +
                    (errors.mail && touched.mail
                      ? "text-red-500 border-red-500"
                      : "border-indigo-500")
                  }
                />
              </label>
            ) : (
              ""
            )}
            <label className="flex flex-col gap-2">
              <Field
                placeholder="почта"
                type="mail"
                name="mail"
                className={
                  "border  rounded-xl py-2 px-4 " +
                  (errors.mail && touched.mail
                    ? "text-red-500 border-red-500"
                    : "border-indigo-500")
                }
              />
            </label>
            <label className="flex flex-col gap-2">
              <Field
                placeholder="адрес"
                name="address"
                className={
                  "border  rounded-xl py-2 px-4 " +
                  (errors.address && touched.address
                    ? "text-red-500 border-red-500"
                    : "border-indigo-500")
                }
              />
            </label>
            {values.picked === "company" ? (
              ""
            ) : (
              <label className="flex flex-col gap-2">
                <Field
                  placeholder="пароль"
                  name="password"
                  className={
                    "border  rounded-xl py-2 px-4 " +
                    (errors.mail && touched.mail
                      ? "text-red-500 border-red-500"
                      : "border-indigo-500")
                  }
                />
              </label>
            )}

            <Button type="submit" className="w-full">
              Зарегестрироваться
            </Button>
            <NavLink to="/signin" className="mx-auto">
              Уже есть аккаунт?
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
}
