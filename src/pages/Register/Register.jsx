import React from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (user, actions) => {
    dispatch(registerUser(user));
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="user-form">
          <label>
            <p>Name</p>
            <Field name="name" />
          </label>

          <label>
            <p>Email</p>
            <Field name="email" />
          </label>

          <label>
            <p>Password</p>
            <Field name="password" />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
