import React from "react";
import "../styles/Islam1.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kalma from "../images/kalma.jpg";
import salah from "../images/salah.jpeg";
import roza from "../images/roza.jpg";
import zakat1 from "../images/zakat1.jpg";
import hajj1 from "../images/hajj1.jpg";

function Islam() {
  return (
    <div className="Islam1">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={3000}
      >
        <div>
          <img src={kalma} alt="" />
          <p className="legend">kalma</p>
        </div>
        <div>
          <img src={salah} alt="" />
          <p className="legend">namaz</p>
        </div>
        <div>
          <img src={roza} alt="" />
          <p className="legend">roza</p>
        </div>
        <div>
          <img src={zakat1} alt="" />
          <p className="legend">zakat</p>
        </div>
        <div>
          <img src={hajj1} alt="" />
          <p className="legend">hajj</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Islam;
