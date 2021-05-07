import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import DeleteIcon from "@material-ui/icons/Delete";
import formatCurrency from "../currency";
import { Link } from "react-router-dom";

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
        {cartitems && cartitems.length !== 0 ? (
          <div className="row">
            <div className="col-lg-8">
              <div class="card">
                <div class="card-header cart_header">
                  <h5>My Cart ({cartitems && cartitems.length})</h5>
                </div>
                {cartitems &&
                  cartitems.map((cart) => (
                    <div class="card-body p-0 cst_card bb">
                      <ul className="d-flex flex-wrap align-items-center ">
                        <li>
                          <img src={cart.image}></img>
                        </li>
                        <li>
                          <h5 class="card-title">{cart.title}</h5>
                          <p class="card-text">{formatCurrency(cart.price)}</p>
                        </li>
                        <li>
                          <button className="cst_btn_icn">+</button>
                          <input type="text" min="1"></input>
                          <button className="cst_btn_icn">-</button>
                        </li>
                        <li>{formatCurrency(cart.price)}</li>
                        <li>
                          <Link>
                            <DeleteIcon color="secondary" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                <div class="card-footer cart_footer d-none d-sm-block">
                  <a href="#" class="btn btn-primary">
                    Place Order
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-sm-0">
              <div class="card">
                <div class="card-header cart_header">
                  <h5>Price Details</h5>
                </div>
                <div class="card-body cart_prcie_details">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <h6>Price ({cartitems && cartitems.length} items)</h6>
                    </li>
                    <li>₹21,393</li>
                  </ul>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <h6>Discount</h6>
                    </li>
                    <li> - ₹2,393</li>
                  </ul>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <h6>Delivery Charges</h6>
                    </li>
                    <li>₹50</li>
                  </ul>
                  <hr></hr>
                  <ul className="d-flex flex-wrap mb-0">
                    <li>
                      <h4 className="mb-0">Total Amount :</h4>
                    </li>
                    <li>₹50</li>
                  </ul>
                </div>
                <div class="card-footer cart_footer d-block d-sm-none">
                  <a href="#" class="btn btn-primary">
                    Place Order
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">Cart is Empty</div>
        )}
      </div>
    </div>
  );
}
