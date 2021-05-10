import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productList, detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import formatCurrency from "../currency";
import { useHistory } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

export default function Productlist() {
  const dispatch = useDispatch();
  const Listproduct = useSelector((state) => state.productList);
  const { products, loading, error } = Listproduct;
  let history = useHistory();

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const productdetail = (product_id) => {
    dispatch(detailsProduct(product_id));
    history.push("/product/" + product_id);
  };

  const addtocart = (product) => {
    console.log(product);
    const format = {
      qty: 1,
    };
    const data = Object.assign(format, product);
    dispatch(addToCart(data));
  };

  return (
    <div className="Productlist">
      {loading && <LoadingBox></LoadingBox>}
      {error && <div>{error}</div>}
      <div className="container cst_container">
        <div className="row mx-0 my-4" id="product_list">
          {products &&
            products.map((product) => (
              <div className="col-md-3 mb-3 filter_list">
                <div className="card baseBlock">
                  <div onClick={() => productdetail(product.id)}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{product.category}</h4>
                    <p className="card-text">{formatCurrency(product.price)}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addtocart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
