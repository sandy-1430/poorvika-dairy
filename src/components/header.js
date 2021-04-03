import React from "react";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import $ from "jquery";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import data from "../data.json";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import LoadingBox from "./LoadingBox";
import Alert from "@material-ui/lab/Alert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { signin, logout, otpverify } from "../actions/userActions";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function Header() {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [name, Setname] = useState("");
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const userData = useSelector((state) => state.userData);
  const { userdata } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      console.log("login success");
      setOpen(false);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const onlogin = () => {
    dispatch(signin(username, password));
  };

  const verifyotp = () => {
    Axios.put("https://demo3.gyso.in/index.php?route=feed/rest_api/signin", {
      userdata: "8124667482",
      otp: otp,
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    // dispatch(otpverify(username, otp));
  };

  const onlogout = () => {
    Setname("");
    setUsername("");
    setOtp("");
    setPassword("");
    dispatch(logout());
  };

  const togglemenu = () => {
    $(".exo-menu").toggleClass("display");
  };

  const toggleForm = () => {
    const login = document.querySelector(".login");
    login.classList.toggle("active");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const profileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const profileClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      {userdata && console.log(userdata)}
      {loading && loading ? (
        <div>
          <LoadingBox />
        </div>
      ) : (
        <div>
          <div className="d-flex flex-wrap align-items-center justify-content-center top-header">
            <div className="cst_brand">
              <img src="images/logo.png" className="header-logo" />
            </div>
            <div className="cst_top_nav d-flex flex-wrap align-items-center">
              <ul className="d-flex m-0 p-0">
                <li>
                  <a>Our Story</a>
                </li>
                <li>
                  <a>Our Suppliers</a>
                </li>
                <li>
                  <a>Our Blog</a>
                </li>
              </ul>
              <TextField
                id="outlined-secondary"
                label="Search"
                variant="outlined"
                size="small"
                className="search-input ml-5 mr-0"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton className="icon-btn">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {userInfo ? (
                <div className="d-flex align-items-center">
                  <Button className="ml-3" onClick={profileClick}>
                    <AccountCircleIcon className="mr-1" />
                    <b>
                      {userInfo.data.firstname}
                      {""}
                      {userInfo.data.lastname}
                    </b>
                  </Button>
                  <StyledMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={profileClose}
                  >
                    <MenuItem onClick={onlogout}>Log Out</MenuItem>
                  </StyledMenu>
                </div>
              ) : (
                <Button className="login-btn ml-lg-4" onClick={handleOpen}>
                  Sign In / Register
                </Button>
              )}
              <div className="d-flex flex-wrap flex-column align-items-center ml-lg-4">
                <a href="/cart">
                  <ShoppingCartIcon />
                  My Cart
                </a>
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <div class="content">
              <ul class="exo-menu">
                <li>
                  <a href="#">
                    {" "}
                    Location
                    <LocationOnIcon fontSize="small" className="menu_icn" />
                  </a>
                  <div class="contact"></div>
                </li>
                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    Dairy
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.Dairy.map((dairy) => (
                        <div class="col-md-1 text-center">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    Vegetables
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.vegetables.map((dairy) =>
                        dairy.id < 8 ? (
                          <div class="col-md-1 text-center">
                            <a>
                              <img
                                width="100%"
                                class="img-responsive"
                                src={dairy.image}
                              />
                              <h4>{dairy.title}</h4>
                            </a>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <div class="row m-0">
                      {data.vegetables.map((dairy) =>
                        dairy.id >= 8 ? (
                          <div class="col-md-1 text-center">
                            <a>
                              <img
                                width="100%"
                                class="img-responsive"
                                src={dairy.image}
                              />
                              <h4>{dairy.title}</h4>
                            </a>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                </li>

                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    EGGS
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.eggs.map((dairy) => (
                        <div class="col-md-1 text-center">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>

                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    RICES & PULSES
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.rice.map((dairy) => (
                        <div class="col-md-1 text-center">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    FERTILIZERS
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.fertilizers.map((dairy) => (
                        <div class="col-md-1 text-center">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li class="images-drop-down">
                  <a href="#">
                    {" "}
                    Services
                    <ArrowDropDownIcon className="menu_icn" />
                  </a>
                  <div class="Images">
                    <div class="row m-0">
                      {data.services.map((dairy) => (
                        <div class="col-md-1 text-center">
                          <a>
                            <img
                              width="100%"
                              class="img-responsive"
                              src={dairy.image}
                            />
                            <h4>{dairy.title}</h4>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li class="images-drop-down">
                  <a href="#" className="calls">
                    Calls
                  </a>
                </li>
                <a
                  href="#"
                  class="toggle-menu visible-xs-block"
                  onClick={togglemenu}
                >
                  |||
                </a>
              </ul>
            </div>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <div className="modal_close">
                  <IconButton className="close_icn" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div class="login">
                  <div class="user signinBx">
                    <div class="imgBx">
                      <img src="images/login.png" alt="" />
                    </div>
                    <div class="formBx">
                      {/* <form className="form" onSubmit={onlogin}> */}
                      <div className="">
                        {/* <Typography variant="h5">Verify OTP</Typography>
                            <TextField
                              margin="normal"
                              required
                              fullWidth
                              value={otp}
                              onChange={(event) => setOtp(event.target.value)}
                            />
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              onClick={verifyotp}
                            >
                              Verify OTP
                            </Button>
                          </div> */}
                        <div>
                          <Typography variant="h5">Sign in</Typography>
                          <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Enter Email or Phone Number"
                            autoFocus
                            value={username}
                            onChange={(event) =>
                              setUsername(event.target.value)
                            }
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
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={onlogin}
                          >
                            Sign In
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
                      {/* </form> */}
                    </div>
                  </div>
                  <div class="user signupBx">
                    <div class="formBx">
                      <form action="" onsubmit="return false;">
                        <h2>Create an account</h2>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          label="Confirm Email Address"
                          name="confirm_email"
                          autoComplete="confirm_email"
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="confirm_password"
                          label="Confirm Password"
                          type="password"
                        />

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Sign Up
                        </Button>
                        <p class="signup">
                          Already have an account ?
                          <a href="javascript:void(0)" onClick={toggleForm}>
                            Sign in.
                          </a>
                        </p>
                      </form>
                    </div>
                    <div class="imgBx">
                      <img src="images/sign-up.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      )}
    </div>
  );
}
