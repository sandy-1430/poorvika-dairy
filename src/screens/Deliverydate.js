import React, { useEffect } from "react";

export default function SubscriptionDateFormat(props) {
  const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sat"];
  const startdate = new Date(props.date);
  const value = props.value;
  const today = new Date();

  useEffect(() => {
    calendar();
  }, []);

  const calendar = () => {
    const currentMonth = startdate.getMonth();
    const currentYear = startdate.getFullYear();
    showCalendar(currentMonth, currentYear);
  };

  const showCalendar = (month, year) => {
    let firstDay = new Date(year, month).getDay();
    let tbl = document.getElementById("calendar-body");
    let days = new Date(year, month + 1, 0).getDate();
    let date = 1;
    let child = "";
    let alter = "";
    if (startdate.getDate() % 2 === 0) {
      alter = "even";
    } else {
      alter = "odd";
    }
    for (let i = 0; i < 6; i++) {
      let row = "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row += "<td></td>";
        } else if (date > days) {
          date = 1;
          month = month + 1;
        } else {
          if (month === today.getMonth()) {
            if (today.getDate() > date) {
              row += "<td class='disable'><span>" + date + "</span></td>";
            } else {
              if (value === "everyday") {
                if (startdate.getDate() <= date) {
                  row += "<td class='active'><span>" + date + "</span></td>";
                } else {
                  row += "<td><span>" + date + "</span></td>";
                }
              } else if (value === "alter") {
                if (date % 2 === 0) {
                  if (alter === "even") {
                    row += "<td class='active'><span>" + date + "</span></td>";
                  } else {
                    row += "<td><span>" + date + "</span></td>";
                  }
                } else {
                  if (alter === "odd") {
                    row += "<td class='active'><span>" + date + "</span></td>";
                  } else {
                    row += "<td><span>" + date + "</span></td>";
                  }
                }
              } else {
                row += "<td><span>" + date + "</span></td>";
              }
            }
          } else {
            if (value === "everyday") {
              row += "<td class='active'><span>" + date + "</span></td>";
            } else if (value === "alter") {
              if (date % 2 === 0) {
                if (alter === "even") {
                  row += "<td><span>" + date + "</span></td>";
                } else {
                  row += "<td class='active'><span>" + date + "</span></td>";
                }
              } else {
                if (alter === "odd") {
                  row += "<td><span>" + date + "</span></td>";
                } else {
                  row += "<td class='active'><span>" + date + "</span></td>";
                }
              }
            } else {
              row += "<td><span>" + date + "</span></td>";
            }
          }
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
      <div className="subs-date-format">
        <h4>Schedule Preview</h4>
        <div className="table">
          <table className="spacer">
            <tr>
              {week.map((weekday) => (
                <th>{weekday}</th>
              ))}
            </tr>
            <tbody id="calendar-body"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
