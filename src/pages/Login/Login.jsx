import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    password: "",
    email: "",
  };
  const handleSubmit = (user, actions) => {
    dispatch(loginUser(user));
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="user-form">
          <label>
            <p>Email</p>
            <Field name="email" />
          </label>

          <label>
            <p>Password</p>
            <Field name="password" />
          </label>

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
