import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import formatCurrency from "../currency";

export default function Productdetails(props) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct());
  }, [detailsProduct]);

  return (
    <div>
      <div className="container cst_container">
        {loading && <LoadingBox></LoadingBox>}
        {error && <div>{error}</div>}
        {product && (
          <div className="row mx-0 my-5 align-items-center justify-content-center">
            <div className="col-md-4">
              <img src={product.image} alt="Logo" width="100%" />
            </div>
            <div className="col-md-6">
              <h2>{product.title}</h2>
              <p className="green-price-txt">{formatCurrency(product.price)}</p>
              <p className="desc-wid">{product.description}</p>
              <button type="button" className="btn btn-outline-success mr-2">
                Instock
              </button>
              <button type="button" className="btn btn-outline-danger ">
                Out of Stock
              </button>
              <br></br>
              <button type="button" className="btn btn-warning mr-3 my-3">
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
