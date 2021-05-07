import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import DeleteIcon from "@material-ui/icons/Delete";
export default function Cartscreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;

  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);

  return (
    <div>
      {console.log(cartitems)}
      <div className="container cst_container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h5>My Cart ({cartitems && cartitems.length})</h5>
              </div>
              {cartitems &&
                cartitems.map((cart) => (
                  <div class="card-body p-0 cst_card bb">
                    <ul className="d-flex align-items-center ">
                      <li>
                        <img src={cart.image}></img>
                      </li>
                      <li>
                        <h5 class="card-title">{cart.title}</h5>
                        <p class="card-text">{cart.category}</p>
                      </li>
                      <li>
                        <button className="cst_btn_icn">+</button>
                        <input type="number" min="1"></input>
                        <button className="cst_btn_icn">-</button>
                      </li>
                      <li>{cart.price}</li>
                      <li>
                        <DeleteIcon />
                      </li>
                    </ul>
                  </div>
                ))}
              <div class="card-footer cst_cart_footer">
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div class="card-footer">
                <a class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
