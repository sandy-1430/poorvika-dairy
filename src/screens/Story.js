import React from "react";

export default function Story() {
  return (
    <div>
      <div className="our-story-page">
        <h4 className="p-3">Shop / Our Story</h4>
        <img src="images/our-story/dairy-story.png" className=" ful-wid-img" />
        <div className="container">
          <div className="our-story-txt">
            <h2>Our Story</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 p-3">
              <div className="our-story-cont">
                <p>
                  We at Poorvika Dairy follow rich traditional practices with
                  uncompromised quality, ensuring that we deliver Health and
                  Happiness to all our customers.
                </p>
                <p style={{ color: "#ff0000" }}>Our mission is to ??????</p>
                <p>
                  Milk – The first food of entire human race. Milk Production in
                  INDIA is almost 150 million tonnes making it No.1 in the
                  world. According to a survey by 2024; almost 75% of the milk
                  and milk products produced in India will be contaminated. If
                  failed to take action against it will make 87% if the
                  population suffer from cancer.
                </p>
              </div>
              <img
                src="images/our-story/photography.png"
                className="ful-wid-img our-story-cont"
              />
            </div>
            <div className="col-lg-6 col-sm-6 p-3">
              <div className="our-story-cont">
                <p>
                  So, We at Poorvika Dairy tend to practice traditional methods
                  right from devoting the holy universal mother and our pride –
                  “COW”, and we care about its feed making sure it is healthy
                  and organic; we allow the calves to feed first and we assure
                  that no steroids were used and finally, we milk the cows in a
                  traditional way.
                </p>
                <p>
                  The survey also says – The most poisonous drink that next
                  generation to have is milk. We don’t want to serve it
                  Poisonous instead we make it Precious.
                </p>
                <h4>
                  Poorvika Dairy<br></br> -We serve Health & Happiness.
                </h4>
              </div>
              <img
                src="images/our-story/photography.png"
                className="ful-wid-img our-story-cont"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
