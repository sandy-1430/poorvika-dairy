import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography } from "@material-ui/core";
import { signin, otpRequest, otpverify } from "../actions/userActions";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "./LoadingBox";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [yourotp, setYourotp] = useState("");
  const [otperror, setOtperror] = useState(false);

  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { error } = userSignin;

  const Requestotp = useSelector((state) => state.Requestotp);
  const { loading, otp, requesterror } = Requestotp;

  const onlogin = () => {
    if (username != "" && password != "") {
      dispatch(signin(username, password));
    }
  };

  const toggleForm = () => {
    const login = document.querySelector(".login");
    login.classList.toggle("active");
  };

  const requestotp = () => {
    if (username == "") {
      setOtperror(true);
    } else {
      dispatch(otpRequest(username));
    }
  };

  const verifyotp = () => {
    const otplogged = true;
    dispatch(signin(username, yourotp, otplogged));
  };

  return (
    <div>
      {loading && <LoadingBox />}
      <div class="user signinBx">
        <div class="imgBx">
          <img src="images/login.png" alt="" />
        </div>
        <div class="formBx">
          {otp && otp.success === 1 ? (
            <div style={{ width: "100%" }}>
              {/* <form onSubmit={verifyotp}> */}
              <TextField
                margin="normal"
                required
                fullWidth
                label="Enter Otp"
                autoFocus
                value={yourotp}
                onChange={(event) => setYourotp(event.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={verifyotp}
              >
                Verify
              </Button>
              {/* </form> */}
            </div>
          ) : (
            <div className="">
              <div>
                <form className="form" method="post" onSubmit={onlogin}>
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
                  {otperror === true ? (
                    <span style={{ color: "red", fontSize: "14px" }}>
                      Please Enter Email or Phone No.
                    </span>
                  ) : (
                    ""
                  )}
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
                  {error ? (
                    <div>
                      <Alert className="mt-3" severity="error">
                        Please Enter Valid Email or Password.
                      </Alert>
                    </div>
                  ) : (
                    requesterror && (
                      <Alert className="mt-3" severity="error">
                        Please Enter Valid Email or Phone No.
                      </Alert>
                    )
                  )}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign in
                  </Button>
                </form>
              </div>
              <h5 className="text-center">OR</h5>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={requestotp}
              >
                Sign in With OTP
              </Button>
              <p class="signup">
                Don't have an account ?
                <a href="javascript:void(0)" onClick={toggleForm}>
                  Sign Up.
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
