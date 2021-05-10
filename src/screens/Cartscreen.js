import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  IncreaseQty,
  DecreaseQty,
  RemoveFromCart,
} from "../actions/cartActions";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import formatCurrency from "../currency";
import { Link } from "react-router-dom";

export default function Cartscreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartitems } = cart;

  const [total, setTotal] = useState(50);

  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);

  const Qtyinc = (id, qnty) => {
    console.log(qnty, id);
    const qty = qnty + 1;
    const data = {
      id,
      qty,
    };
    dispatch(IncreaseQty(data));
  };

  const Qtydec = (id, qnty) => {
    console.log(qnty, id);
    const qty = qnty - 1;
    const data = {
      id,
      qty,
    };
    dispatch(DecreaseQty(data));
  };

  const removeproduct = (id) => {
    console.log(id);
    dispatch(RemoveFromCart(id));
  };

  return (
    <div>
      {console.log(cartitems)}
      {console.log(total)}

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
                    <div
                      class="card-body p-0 cst_card bb"
                      data-aos="fade-zoom-in"
                      data-aos-delay="100"
                      data-aos-anchor=".example-selector"
                    >
                      <ul className="d-flex flex-wrap align-items-center ">
                        <li>
                          <img src={cart.image}></img>
                        </li>
                        <li>
                          <h5 class="card-title">{cart.title}</h5>
                          <p class="card-text">{formatCurrency(cart.price)}</p>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="cst_btn_icn"
                            disabled={cart.qty === 1 ? true : false}
                            onClick={() => Qtydec(cart.id, cart.qty)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            min="1"
                            value={cart.qty}
                            readOnly
                          />
                          <button
                            type="button"
                            className="cst_btn_icn"
                            onClick={() => Qtyinc(cart.id, cart.qty)}
                          >
                            +
                          </button>
                        </li>
                        <li>
                          <b>{formatCurrency(cart.qty * cart.price)}</b>
                        </li>
                        <li>
                          <Link onClick={() => removeproduct(cart.id)}>
                            <DeleteIcon color="secondary" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                <div class="card-footer cart_footer d-none d-sm-block">
                  <Button variant="contained" color="primary">
                    Place Order
                  </Button>
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
                    <li>
                      {formatCurrency(
                        cartitems.reduce((a, c) => a + c.price * c.qty, 0)
                      )}
                    </li>
                  </ul>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <h6>Discount</h6>
                    </li>
                    <li> Some Amt</li>
                  </ul>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <h6>Delivery Charges</h6>
                    </li>
                    <li>{formatCurrency(total)}</li>
                  </ul>
                  <hr></hr>
                  <ul className="d-flex flex-wrap mb-0">
                    <li>
                      <h4 className="mb-0">Total Amount :</h4>
                    </li>
                    <li>
                      {formatCurrency(
                        cartitems.reduce((a, c) => a + c.price * c.qty, 0) +
                          total
                      )}
                    </li>
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
