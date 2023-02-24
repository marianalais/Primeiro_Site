import React from "react";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Button from "../Button";

function Carrousel({ banners = [] }) {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      {banners.map((item, index) => (
        <div key={index} className="container-carousel">
          <img className="banner" src={item.src} alt={"ar condicionado"} />
          <Button texto={item.titulo} />
        </div>
      ))}
    </Carousel>
  );
}

export default Carrousel;
