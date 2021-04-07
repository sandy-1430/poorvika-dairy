import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { register, signin } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "./LoadingBox";

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

  const dispatch = useDispatch();
  const registerdetail = useSelector((state) => state.registerDetail);
  const { registerinfo, error, loading } = registerdetail;

  useEffect(() => {
    if (registerinfo) {
      //   dispatch(signin(name, pass));
    }
  }, [registerinfo]);

  const signup = () => {
    dispatch(register(name, pass, phone, email));
  };

  const toggleForm = () => {
    const login = document.querySelector(".login");
    login.classList.toggle("active");
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
  return (
    <div>
      {loading && <LoadingBox />}
      <div class="user signupBx">
        <div class="formBx">
          {/* <form action=""> */}
          <h2>Create an account</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={pass}
            onChange={(event) => setPass(event.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id=""
            name="confirm_password"
            label="Confirm Password"
            type="password"
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
            onClick={signup}
          >
            Sign Up
          </Button>
          <p class="signup">
            Already have an account ?
            <a href="javascript:void(0)" onClick={toggleForm}>
              Sign in.
            </a>
          </p>
          {/* </form> */}
        </div>
        <div class="imgBx">
          <img src="images/sign-up.png" alt="" />
        </div>
      </div>
    </div>
  );
}
