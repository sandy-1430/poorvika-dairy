import React, { useState, useEffect } from "react";
import axios from "axios";
export default function User() {
  const [username, setUsername] = useState("");
  const [yourotp, setYourotp] = useState("");
  const Requestotp = () => {
    axios
      .post("https://demo3.gyso.in/index.php?route=feed/rest_api/signin", {
        userdata: "8124667482",
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const Verifyotp = () => {
    axios
      .post("https://demo3.gyso.in/index.php?route=feed/rest_api/signinotp", {
        userdata: "8124667482",
        otp: yourotp,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const signin = () => {
    axios
      .put("https://demo3.gyso.in/index.php?route=feed/rest_api/signin", {
        userdata: "8124667482",
        password: "Sandy@1430",
      })
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    calendar();
  }, []);

  const calendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    showCalendar(currentMonth, currentYear);
  };

  const showCalendar = (month, year) => {
    const today = new Date();
    let firstDay = new Date(year, month).getDay();
    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";

    let date = 1;
    let days = new Date(year, month + 1, 0).getDate();
    let child = "";
    for (let i = 0; i < 6; i++) {
      let row = "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row += "<td></td>";
        } else if (date > days) {
          date = 1;
          month = month + 1;
        } else {
          row += "<td><span>" + date + "</span></td>";
          date++;
        }
      }
      row += "</tr>";
      child += row;
    }
    tbl.innerHTML = child;
  };

  return (
    <div>
      <div className="container my-5">
        <form className="py-2">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            type="button"
            className="btn btn-primary"
            onClick={Requestotp}
          >
            Login with Otp
          </button>
          <button type="button" className="btn btn-primary" onClick={signin}>
            Login
          </button>
        </form>
        <form>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="enter otp"
            value={yourotp}
            onChange={(e) => setYourotp(e.target.value)}
          ></input>
          <button type="button" className="btn btn-success" onClick={Verifyotp}>
            Verify
          </button>
        </form>

        <table>
          <tbody id="calendar-body"></tbody>
        </table>
      </div>
    </div>
  );
}
