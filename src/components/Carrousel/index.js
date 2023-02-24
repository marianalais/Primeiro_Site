import React from "react";
import "./styles.css";
import ImageBanner from "../../assets/quarto.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Carrousel({ banners = [] }) {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img className="banner" src={ImageBanner} alt={"ar condicionado"} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img className="banner" src={ImageBanner} alt={"ar condicionado"} />{" "}
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img className="banner" src={ImageBanner} alt={"ar condicionado"} />{" "}
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Carrousel;
{
  /* <div>
      <img className="banner" src={ImageBanner} alt={"ar condicionado"} />
      <p className="legend">{"clique aqui"}</p>
    </div> */
}
