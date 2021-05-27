import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogActions,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Deliverydate from "./Deliverydate";

export default function Subscribeform(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datevalue, setDatevalue] = useState("");
  const [intervalue, setIntervalue] = useState("");

  let interval = "";

  const selectinterval = (value) => {
    setIntervalue(value);
    interval = <Deliverydate date={selectedDate} value={intervalue} />;
  };
  return (
    <div>
      <Dialog
        open={props.open}
        fullWidth
        onClose={props.handleClose}
        className="subscription_popup"
      >
        <h2 className="text-center">SUBSCRIPTION</h2>
        <DialogContent>
          <form>
            <div class="row">
              <div class="col-md-8 mb-3">
                <label for="mobileno">Mobile Number</label>
                <TextField
                  id="mobileno"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="date">Date</label>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date"
                      size="small"
                      inputVariant="outlined"
                      value={selectedDate}
                      minDate={new Date()}
                      onChange={(date) => setSelectedDate(date)}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-3">
                <label for="size">Add Size</label>
                <FormControl
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <Select id="size">
                    <MenuItem value="200 ml">200 ml</MenuItem>
                    <MenuItem value="500 ml">500 ml</MenuItem>
                    <MenuItem value="1 ltr">1 ltr</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div class="col-md-4 mb-3">
                <label for="qty">Add Quantity</label>
                <TextField
                  id="qty"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="pincode">Pincode</label>
                <TextField
                  id="pincode"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="coupon">Apply Coupon</label>
                <TextField
                  id="coupon"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="instruct">Choose Delivery Schedule</label>
                <div className="row delivery-schedule">
                  <div className="col-md-3">
                    <div class="form-check cst_del_radio ">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="delschedule"
                        id="everyday"
                        value="everyday"
                        onChange={(e) => setDatevalue(e.target.value)}
                        checked={datevalue === "everyday" ? true : false}
                      />
                      <label class="form-check-label" for="everyday">
                        Everyday
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="form-check cst_del_radio ">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="delschedule"
                        id="oneday"
                        value="oneday"
                        checked={datevalue === "oneday" ? true : false}
                        onChange={(e) => setDatevalue(e.target.value)}
                      />
                      <label class="form-check-label" for="oneday">
                        Oneday
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="form-check cst_del_radio ">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="delschedule"
                        id="interval"
                        value="interval"
                        checked={datevalue === "interval" ? true : false}
                        onChange={(e) => setDatevalue(e.target.value)}
                      />
                      <label class="form-check-label" for="interval">
                        On Intervals
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="form-check cst_del_radio ">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="delschedule"
                        id="customize"
                        value="customize"
                        checked={datevalue === "customize" ? true : false}
                        onChange={(e) => setDatevalue(e.target.value)}
                      />
                      <label class="form-check-label" for="customize">
                        Customize
                      </label>
                    </div>
                  </div>
                  {datevalue === "everyday" && (
                    <div className="col-md-12">
                      <Deliverydate date={selectedDate} value={datevalue} />
                    </div>
                  )}
                  {datevalue === "interval" && (
                    <div className="col-md-12">
                      <ul className="d-flex flex-wrap oninterval-tab">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className={intervalue === "alter" ? "active" : ""}
                            onClick={() => selectinterval("alter")}
                            data-id="alter"
                          >
                            Alternate days
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className={intervalue === "third" ? "active" : ""}
                            onClick={() => selectinterval("third")}
                            data-id="third"
                          >
                            Every third day
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className={intervalue === "fourth" ? "active" : ""}
                            onClick={() => selectinterval("fourth")}
                            data-id="fourth"
                          >
                            Every fourth day
                          </a>
                        </li>
                      </ul>
                      {intervalue && interval}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="instruct">Instructions for Delivery Partners</label>
                <TextField
                  id="instruct"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="instruct">Door Bell</label>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="ring_btn btn"
                      onClick={props.handleClose}
                    >
                      <NotificationsNoneIcon /> Don't Ring
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="ring_btn btn"
                      onClick={props.handleClose}
                    >
                      <NotificationsOffIcon /> Ring Bell
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions className="d-block text-center">
          <button
            type="button"
            className="btn pop_subscribe"
            onClick={props.handleClose}
          >
            Subscribe
          </button>
          <a className="d-block pop_subscribe_link">Close</a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
