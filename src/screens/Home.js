import React from "react";
import { useEffect, useState } from "react";
import data from "../data.json";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";

const useStyles = makeStyles((theme) => ({
  video_bg: {
    backgroundImage: "url(images/video.png)",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
}));

export default function Home() {
  const dispatch = useDispatch();
  const Listproduct = useSelector((state) => state.productList);
  const { products, loading, error } = Listproduct;
  const classes = useStyles();

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div className="home">
      {/* {loading && <LoadingBox></LoadingBox>}
      {products && (
        <div>
          {products.map((product) => (
            <div>
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      )} */}
      <div className="home-banner">
        <img src="images/A2-milk.jpg" width="100%"></img>
      </div>
      <div className="home-favourite pt_40">
        <div className="row m-0">
          <div className="col-lg-12 text-center">
            <h2 className="home-title">Our new favourites</h2>
          </div>
          <div className="col-lg-6">
            <img src="images/poorvika-icecream.png" width="100%"></img>
          </div>
          <div className="col-lg-6">
            <img src="images/poorvika-mik-shake.png" width="100%"></img>
          </div>
        </div>
      </div>
      <div className="our-product pt_40">
        <div className="row m-0">
          <div className="col-lg-12 text-center">
            <h2 className="home-title">Our Products & Service</h2>
          </div>
        </div>
        <div className="row m-0">
          {data.home_product.map((home) => (
            <div className="col-lg-3 mb-4 our-product-cnt">
              <img src={home.image} width="100%"></img>
              <div className="home-product-title">
                <h4>{home.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="home-delivery-banner pt_40">
        <img src="images/home-delivery-banner.png" width="100%"></img>
      </div>
      <div className="home-app-screen pt_40 pb_40">
        <div className="row m-0 align-items-center">
          <div className="col-lg-4">
            <img src="images/app-screen.png" width="100%"></img>
          </div>
          <div className="col-lg-4">
            <h1>
              GET <br />
              <b>STARTED</b>
            </h1>
            <div className="app_cnt mt_40">
              <ArrowDownwardIcon fontSize="large" className="app_icn" />
              <h3>DOWNLOAD THE APP</h3>
              <p>
                Download the Poorvika dairy App and get your subscription
                started. It only takes a few minutes to get started. You can
                subscribe to milk or order other dairy products.
              </p>
            </div>
            <div className="app_cnt mt_40">
              <LocationOnIcon fontSize="large" className="app_icn" />
              <h3>DELIVERY AREAS</h3>
              <p>
                Currently, Poorvika Dairy services customers in Chennai. If you
                need service in your community, please register. We will start
                serving our products in your community.
              </p>
            </div>
            <button className="reg_btn mt_40">Register Now</button>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="app_cnt">
              <PhoneAndroidIcon fontSize="large" className="app_icn" />
              <h3>ANDROID OR iOS</h3>
              <img src="images/play-store.png" className="my-3"></img>
              <img src="images/app-store.png"></img>
            </div>
            <div className="app_cnt mt_40">
              <LocalShippingIcon fontSize="large" className="app_icn" />
              <h3>OTHER DELIVERY PARTNERS</h3>
              <ul className="d-flex mt-5">
                <li>
                  <img src="images/bb-daily-icon.png" width="100%"></img>
                </li>
                <li>
                  <img src="images/daily-ninja-icon.png" width="100%"></img>
                </li>
                <li>
                  <img src="images/fth-icon.png" width="100%"></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.video_bg}></div>
      <div className="latest-news pt_40 pb_40">
        <div className="row m-0">
          <div className="col-lg-3 mb-3">
            <div className="news-cnt">
              <figure>
                <img src="images/visit-farm.jpg" width="100%"></img>
              </figure>
              <div className="news-cnt-title">
                <h2>Visit Our Farm</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="news-cnt">
              <figure>
                <img src="images/our-feed.jpg" width="100%"></img>
              </figure>
              <div className="news-cnt-title text-center">
                <h2>
                  Know About <br></br>Our Feed
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="news-cnt">
              <figure>
                <img src="images/our-cattels.png" width="100%"></img>
              </figure>
              <div className="news-cnt-title cattel-title">
                <h2>Our Cattels</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-lg-6">
            <div className="news-cnt">
              <figure>
                <img src="images/our-factory.png" width="100%"></img>
              </figure>
              <div className="news-cnt-title cattel-title">
                <h2>Our Factory</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="news-cnt">
              <figure>
                <img src="images/our-milk.jpg" width="100%"></img>
              </figure>
              <div className="news-cnt-title cattel-title">
                <h2>Our Milk</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-dairy pt_40 pb_40">
        <div className="container">
          <h1>
            START MILK <br /> <b>SUBSCRIPTION</b>
          </h1>
          <p>NOW IN CHENNAI</p>
          <button className="sub-btn">SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
}
