import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import dropdown from "../../assets/dropdown.svg";
import dropdownActive from "../../assets/dropdownActive.svg";
import paperclip from "../../assets/paperclip.svg";
import close from "../../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";

export default function WritePostDrop() {
  let dispatch = useDispatch();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      dispatch({ type: "writePost/addFile", file });
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  let files = useSelector((state) => state.writePost.files);
  let fileNames = files.map((file) => file.path);
  let DropDown = (file) => (
    <div className="flex flex-col items-center text-center gap-2 px-4">
      <img src={file} alt="" className="w-12 h-12" />
      <div className="px-6">Выберите файл</div>
    </div>
  );
  return (
    <div className="grid grid-cols-2 gap-10 h-64">
      <div
        {...getRootProps()}
        className=" py-8 flex items-center justify-center cursor-pointer stroke dark:strokeDark outline-0 border-0"
      >
        <input {...getInputProps()} />
        <div>
          {isDragActive ? DropDown(dropdownActive) : DropDown(dropdown)}
        </div>
      </div>
      <div className="flex flex-col gap-2 max-h-60">
        {fileNames.map((fileName) => (
          <div
            key={fileName}
            className="border border-indigo-400 py-2 px-4 rounded-lg flex gap-2 w-full items-center dark:bg-dark-600"
          >
            <img src={paperclip} alt="" />
            <div className="o">{fileName.substring(0, 30)}</div>
            <button
              className="close ml-auto "
              type="button"
              onClick={() => {
                dispatch({ type: "writePost/deleteFile", fileName });
              }}
            >
              <img src={close} alt="закрыть" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
