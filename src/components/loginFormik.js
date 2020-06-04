import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "500px",
    margin: "0 auto"
  },
  marginButtom: {
    marginBottom: "10px"
  },
  marginLeft: {
    marginRight: "4px"
  }
}));

function Login({ initialValue, handleSubmit }) {
  const classes = useStyles();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("O email inserido não é válido")
      .required("O campo email é obrigatório"),
    password: Yup.string()
      .min(8, "password deve conter no minimo 8 caracteres")
      .required("O campo password é obrigatório")
  });
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      {({ handleChange, values }) => (
        <div className={classes.root}>
          <Box component="h1">Login Form</Box>
          <Form autoComplete="off">
            <Field
              component={TextField}
              className={classes.marginButtom}
              name="email"
              variant="outlined"
              label="Email or username..."
              value={values.email}
              onChange={handleChange}
              fullWidth
            />

            <Field
              component={TextField}
              onChange={handleChange}
              className={classes.marginButtom}
              name="password"
              variant="outlined"
              value={values.password}
              label="Password"
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.marginLeft}
            >
              Signup
            </Button>
            <Button variant="outlined" type="submit">
              login
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

Login.propTypes = {
  initialValue: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Login;
