import React from "react";
import Button from "@material-ui/core/Button";
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Login() {
  const [emal, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState({});
  function handleChangeEmail(evet) {
    setEmail(evet.target.value);
    console.log(emal);
  }
  function handleChangePassword(evet) {
    setPassword(evet.target.value);
    console.log(password);
  }

  function handleSubmit(evet) {
    evet.preventDefault();
    if (!emal.trim().length) {
      setError(prevError => ({
        ...prevError,
        email: "Error email must not be null"
      }));

      if (!password.trim().length) {
        setError(prevError => ({
          ...prevError,
          password: "Error password must not be null "
        }));
      }
    }
    console.log(error);
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="h1">Login Form</Box>
      <form autoComplete="off" noValidate onSubmit={handleSubmit.bind(this)}>
        <TextField
          className={classes.marginButtom}
          name="email"
          variant="outlined"
          label="Email or username..."
          onChange={handleChangeEmail.bind(this)}
          fullWidth
        />
        {error?.email && <span>{error.email}</span>}
        <TextField
          onChange={handleChangePassword.bind(this)}
          className={classes.marginButtom}
          name="password"
          variant="outlined"
          label="Password"
          fullWidth
        />
        {error?.password && <p>{error.password}</p>}
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
      </form>
    </div>
  );
}
