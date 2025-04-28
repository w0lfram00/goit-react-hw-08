import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const handleSubmit = ({ name, number }, actions) => {
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string()
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
        "incorrect format"
      )
      .required(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label>
            <p>Name</p>
            <Field type="text" name="name" />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label>
            <p>Number</p>
            <Field type="tel" name="number" />
            <span>
              <ErrorMessage name="number" />
            </span>
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
