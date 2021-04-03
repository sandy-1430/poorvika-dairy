import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import formatCurrency from "../currency";
import { addToCart } from "../actions/cartActions";
import { useHistory } from "react-router-dom";

const Productdetails = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  let history = useHistory();

  useEffect(() => {
    dispatch(detailsProduct(match.params.id));
  }, [detailsProduct]);

  const addtocart = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div className="container cst_container">
        {loading && <LoadingBox></LoadingBox>}
        {error && <div>{error}</div>}
        {product && (
          <div className="row mx-0 my-5 align-items-center justify-content-center">
            <div className="col-md-3">
              <img src={product.image} alt="Logo" width="100%" />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p className="desc-wid">{product.description}</p>
              <p className="green-price-txt">{formatCurrency(product.price)}</p>
              <button type="button" className="btn btn-outline-success mr-2">
                Instock
              </button>
              <button type="button" className="btn btn-outline-danger ">
                Out of Stock
              </button>
              <br></br>
              <button
                type="button"
                onClick={() => addtocart(product.id)}
                className="btn btn-warning mr-3 my-3"
              >
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Productdetails;
