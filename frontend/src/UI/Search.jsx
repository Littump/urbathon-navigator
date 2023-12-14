import { Field } from "formik";

function Search({ name, placeholder }) {
  return (
    <label className="bg-white rounded-full w-full flex gap-6 px-5 items-center border-2 border-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 text-slate-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <Field
        type="search"
        name={name}
        placeholder={placeholder}
        className="w-full py-2 outline-none border-none"
      />
    </label>
  );
}

export default Search;
