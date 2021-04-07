import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Cartscreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);

  return (
    <div>
      {console.log(cartItems)}
      <div>
        <div className="cart-sign mt-5">
          <div className="row mx-0">
            <div className="col-lg-8">
              <div class="card mb-3 mx-5">
                <div class="card-header bg-transparent">
                  <div className="row mx-0">
                    <div className="col-md-12">
                      <h4>Cart Items ({cartItems && cartItems.length})</h4>
                    </div>
                  </div>
                </div>
                {cartItems &&
                  cartItems.map((cart) => (
                    <div class="shadow-lg p-3  bg-white rounded m-3">
                      <div class="card-body">
                        <div className="row align-items-center">
                          <div className="col-md-3">
                            <img
                              src={cart.data.image}
                              alt={cart.data.title}
                              width="100%"
                            />
                          </div>
                          <div className="col-md-6">
                            <h4>{cart.data.title}</h4>
                            <p className="green-price-txt text-success">
                              {" "}
                              {cart.data.price}
                            </p>
                          </div>
                          <div className="col-md-3">
                            <h2>
                              <span className="dcrmt-sign">-</span>
                              <span className="sqr-box">1</span>
                              <span className="Icrmt-sign">+</span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                <div class="card-footer">
                  <div className="row mx-0">
                    <div className="col-md-12 text-right">
                      <button type="button" className="btn btn-warning ">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
