import { Field } from "formik";

function Write({ name, placeholder, handleSubmit }) {
  return (
    <label className="bg-white text-gray-700 group text-sm font-semibold rounded-full w-full flex gap-6 py-1 px-4 items-center border-2 border-gray-300">
      <Field
        name={name}
        placeholder={placeholder}
        className="w-full py-1 outline-none border-none"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 cursor-pointer transition group-hover:text-deep-purple-500"
        onClick={handleSubmit}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    </label>
  );
}

export default Write;
