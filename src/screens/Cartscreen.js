import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Cartscreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart());
  }, [dispatch]);

  return <div>{console.log()}</div>;
}
