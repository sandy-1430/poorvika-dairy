import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { signin } from "../actions/userActions";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { error } = userSignin;

  const onlogin = () => {
    dispatch(signin(username, password));
  };

  const toggleForm = () => {
    const login = document.querySelector(".login");
    login.classList.toggle("active");
  };

  return (
    <div>
      <div class="user signinBx">
        <div class="imgBx">
          <img src="images/login.png" alt="" />
        </div>
        <div class="formBx">
          <form className="form" method="post" onSubmit={onlogin}>
            <div className="">
              <div>
                <Typography variant="h5">Sign in</Typography>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Enter Email or Phone Number"
                  autoFocus
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                  margin="normal"
                  id="standard-password-input"
                  label="Enter Password"
                  type="password"
                  fullWidth
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign in
                </Button>
              </div>

              {error && (
                <div>
                  <Alert className="mt-3" severity="error">
                    Please Enter Valid Email or Phone No.
                  </Alert>
                </div>
              )}
              <p class="signup">
                Don't have an account ?
                <a href="javascript:void(0)" onClick={toggleForm}>
                  Sign Up.
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
