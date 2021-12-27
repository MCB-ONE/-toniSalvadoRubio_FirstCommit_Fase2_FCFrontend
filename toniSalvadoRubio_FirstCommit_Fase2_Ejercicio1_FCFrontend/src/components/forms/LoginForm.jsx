/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';

/** Initial values for formik */
const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  /** Yup schema config */
  const registerSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email('*Formato de email inválido')
        .required('*Campo obligatorio'),
      password: Yup.string()
        .min(8, '*Contraseña muy corta')
        .required('*Campo obligatorio'),
    },
  );

  // Submit handle trigger for user login
  const authUser = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      // *** Yup Validation Schema ***
      validationSchema={registerSchema}
      // ** onSubmit Event
      onSubmit={async (values) => {
        authUser(values);
      }}
    >
      {({
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
      }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label cm-text-700">
              Email
            </label>
            <div className="input-wrapper">
              {/* email Errors */}
              {
                errors.email && touched.email
                && (
                  <ErrorMessage name="email" component="div" className="form-error" />
                )
              }
              <Field
                type="email"
                className="form-control"
                id="email"
                placeholder="Introduce tu correo"
                name="email"
              />
            </div>

          </div>
          <div className="mb-3">
            <label htmlFor="pasword" className="form-label cm-text-700">Contraseña</label>
            <div className="input-wrapper">
              <Field
                type="password"
                className="form-control"
                id="pasword"
                placeholder="Introduce tu contraseña"
                name="password"
              />
              {/* Password Errors */}
              {
              errors.password && touched.password
              && (
                <ErrorMessage name="password" component="div" className="form-error cm-text-700" />
              )
            }
            </div>
          </div>
          <div className="mb-3 row">
            <div className="mb-3 col-6 form-check">
              <input type="checkbox" className="form-check-input" id="recuerdame" />
              <label className="form-check-label" htmlFor="recuerdame">Recuérdame</label>
            </div>
            <div className="col-6">
              <a href="/home." className="cm-text--green cm-text-600">He olvidado la contraseña</a>
            </div>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
