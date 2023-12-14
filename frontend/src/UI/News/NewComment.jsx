import { Form, Formik } from "formik";
import Write from "../Write";

function NewComment({ addComment }) {
  return (
    <Formik
      initialValues={{ comment: "" }}
      onSubmit={(values, { resetForm }) => {
        addComment(values.comment);
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Form className="w-full ">
          <Write
            name="comment"
            placeholder="написать комментарий"
            handleSubmit={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  );
}

export default NewComment;
