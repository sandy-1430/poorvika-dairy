import React from "react";
import Subscribeform from "./Subscribeform";

export default function Subscription() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="A2-milk py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="content-head mb-5">
                <h2>Organic A2 Milk</h2>
                <p>Farm fresh & pure A2 Gir Cow Milk from our own farm.</p>
              </div>
              <div className="row align-items-center price-details my-5">
                <div className="col-lg-4">
                  <p>Price : Rs.60</p>
                </div>
                <div className="col-lg-2 text-center">
                  <p>Qty : </p>
                </div>
                <div className="col-lg-4">
                  <button type="button">-</button>
                  <input type="text" readOnly value="1" />
                  <button type="button">+</button>
                </div>
              </div>
              <ul className="d-flex flex-wrap p-0 mb-5">
                <li>
                  <a>250 ml</a>
                </li>
                <li>
                  <a>500 ml</a>
                </li>
                <li>
                  <a>1 ltr</a>
                </li>
              </ul>
              <button
                className="btn btn-warning subscribe_btn subscribe"
                onClick={handleClickOpen}
              >
                Subscribe @ ₹59.00
              </button>
              <br></br>
              <br></br>
              <button className="btn btn-secondary subscribe_btn">
                Buy Once
              </button>
            </div>
            <div className="col-lg-6">
              <img src="images/organic-a2-milk.png" width="100%"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="A1-milk py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="images/A1_Milk.png" width="100%"></img>
            </div>
            <div className="col-lg-6">
              <div className="content-head mb-5">
                <h2>Standardised A1 Milk</h2>
                <p>Farm fresh & pure A2 Gir Cow Milk from our own farm.</p>
              </div>
              <div className="row align-items-center price-details my-5">
                <div className="col-lg-4">
                  <p>Price : Rs.60</p>
                </div>
                <div className="col-lg-2 text-center">
                  <p>Qty : </p>
                </div>
                <div className="col-lg-4">
                  <button type="button">-</button>
                  <input type="text" readOnly value="1" />
                  <button type="button">+</button>
                </div>
              </div>
              <ul className="d-flex flex-wrap p-0 mb-5">
                <li>
                  <a>250 ml</a>
                </li>
                <li>
                  <a>500 ml</a>
                </li>
                <li>
                  <a>1 ltr</a>
                </li>
              </ul>
              <button className="btn btn-warning subscribe_btn subscribe">
                Subscribe @ ₹59.00
              </button>
              <br></br>
              <br></br>
              <button className="btn btn-secondary subscribe_btn">
                Buy Once
              </button>
            </div>
          </div>
        </div>
      </div>
      <Subscribeform open={open} handleClose={handleClose} />
    </div>
  );
}
