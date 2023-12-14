import { Button } from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import avatar from "../assets/big_avatar.png";
import ProfileSidebar from "../UI/ProfileSidebar/ProfileSidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { updateProfileHook } from "../hooks/updateProfileHook";

function SetValues({ setValues }) {
  const user = useSelector((state) => state.profile.profile);
  useEffect(() => {
    setValues({
      phone: user.username == undefined ? "" : user.username,
      address: user.address == undefined ? "" : user.address,
      mail: user.email == undefined ? "" : user.email,
      name:
        user.first_name === undefined ||
        user.last_name === undefined ||
        user.first_name === "" ||
        user.last_name === ""
          ? ""
          : user?.first_name + " " + user?.last_name,
    });
  }, [user]);
  return null;
}

export default function Settings() {
  const mutation = updateProfileHook();
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
    <div className="flex gap-4 mx-5 ">
      <div className="bg-white rounded-3xl w-8/12  min-h-[80vh] h-full py-20 px-10 ">
        <div className="flex gap-10 items-center">
          <img src={avatar} alt="" className="w-24 h-24" />
          <h1 className="font-bold text-3xl">Профиль </h1>
        </div>
        <Formik
          initialValues={{
            phone: "",
            address: "",
            mail: "",
            name: "",
          }}
          onSubmit={(values) => {
            if (confirm("Вы точно хотите редактировать профиль?")) {
              mutation.mutate(values);
            }
          }}
          validationSchema={loginSchema}
        >
          {({ errors, touched, setValues }) => (
            <Form className="flex flex-col gap-10 mt-10 ">
              <SetValues setValues={setValues} />
              <div className=" grid grid-cols-2 gap-10">
                <label className="flex flex-col gap-2 font-semibold">
                  Имя Фамилия
                  <Field
                    name="name"
                    placeholder="Имя Фамилия"
                    className={
                      "border  rounded-xl py-2 px-4 " +
                      (errors.name && touched.name
                        ? "text-red-500 border-red-500"
                        : "border-indigo-500")
                    }
                  />
                </label>
                <label className="flex flex-col gap-2 font-semibold ">
                  Номер телефона
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
                <label className="flex flex-col gap-2 font-semibold">
                  Почта
                  <Field
                    placeholder="Почта"
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
                <label className="flex flex-col gap-2 font-semibold">
                  Адрес
                  <Field
                    placeholder="Адрес"
                    name="address"
                    className={
                      "border  rounded-xl py-2 px-4 " +
                      (errors.address && touched.address
                        ? "text-red-500 border-red-500"
                        : "border-indigo-500")
                    }
                  />
                </label>
              </div>
              <Button type="submit" className="w-full mt-6">
                Обновить профиль
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <ProfileSidebar withLogo={false} />
    </div>
  );
}
