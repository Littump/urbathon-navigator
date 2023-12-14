import { Form, Formik } from "formik";
import ResponsesCompanies from "../UI/Responses/ResponsesCompanies";
import ResponsesFilters from "../UI/Responses/ResponsesFilters";
import { getCompaniesHook } from "../hooks/getCompaniesHook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Responses() {
  const { data, isLoading } = getCompaniesHook();
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch({
        type: "companies/setCompanies",
        companies: data?.data?.results,
      });
    }
  }, [data]);
  // получить сообщения и понять как писать их
  return (
    <Formik
      initialValues={{ filter: ["electricity", "gas", "water"] }}
      onSubmit={() => {}}
    >
      {({ values }) => (
        <Form className="w-full flex-col flex gap-4 font-raleway bg-white py-12 px-20 mx-5 rounded-3xl max-w-[1100px]">
          <h1 className="text-2xl font-bold ">Организации</h1>
          <ResponsesFilters filter={values.filter} />
          <ResponsesCompanies filter={values.filter} />
        </Form>
      )}
    </Formik>
  );
}
