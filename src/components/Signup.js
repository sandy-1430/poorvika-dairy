import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { register, signin } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import usePasswordValidator from "react-use-password-validator";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {
  const classes = useStyles();
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmpass] = useState(false);
  const [disable, setDisable] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [passerror, setPasserror] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
  const registerdetail = useSelector((state) => state.registerDetail);
  const { registerinfo, error } = registerdetail;

  useEffect(() => {
    if (registerinfo) {
      // dispatch(signin(name, pass));
    }
  }, [registerinfo]);

  const toggleForm = () => {
    const login = document.querySelector(".login");
    login.classList.toggle("active");
  };

  const validate = (e) => {
    setPass(e.target.value);
    setPasserror("");
    let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (e.target.value.length >= 8) {
      if (e.target.value.match(password)) {
      } else {
        setPasserror(
          "Password must be Numeric,Captial,Small and Specail Characters"
        );
      }
    } else {
      setPasserror("Password must be a 8 Character");
    }
  };

  const confirmpassword = (e) => {
    if (pass === e.target.value) {
      setConfirmpass(false);
      setDisable(false);
    } else {
      setDisable(true);
      setConfirmpass(true);
    }
  };

  const onregister = () => {
    dispatch(register(name, pass, phone, email));
  };

  const passwordkey = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div>
      <div class="user signupBx">
        <div class="formBx">
          <form action="#" style={{ width: "100%" }} onSubmit={onregister}>
            <FormControl fullWidth>
              <h2>Create an account</h2>
              <TextField
                label="Name"
                margin="normal"
                fullWidth
                color="primary"
                required
                value={name}
                onChange={(e) =>
                  setName(e.target.value.replace(/[^A-Za-z]/, ""))
                }
              />
              <TextField
                label="Phone No"
                margin="normal"
                fullWidth
                color="primary"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/, ""))}
                inputProps={{ maxLength: 10 }}
              />
              <TextField
                label="Email"
                type="email"
                margin="normal"
                fullWidth
                required
                color="primary"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <FormControl margin="normal">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  margin="normal"
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={passwordkey("password")}
                  onKeyUp={(e) => validate(e)}
                  inputProps={{ minLength: 8 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {/* <TextField
                label="Password"
                type="password"
                margin="normal"
                fullWidth
                required
                color="primary"
                value={pass}
              /> */}
              {passerror && (
                <Alert
                  className="d-flex align-items-center"
                  style={{ fontSize: 11, padding: "0 5px" }}
                  severity="error"
                >
                  {passerror}
                </Alert>
              )}
              <TextField
                label="Confirm Password"
                type="password"
                margin="normal"
                fullWidth
                required
                color="primary"
                onChange={(e) => confirmpassword(e)}
                error={confirmpass}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={disable}
              >
                Sign Up
              </Button>
              <p class="signup">
                Already have an account ?
                <a href="javascript:void(0)" onClick={toggleForm}>
                  Sign in.
                </a>
              </p>
            </FormControl>
          </form>
        </div>
        <div class="imgBx">
          <img src="images/sign-up.png" alt="" />
        </div>
      </div>
    </div>
  );
}
