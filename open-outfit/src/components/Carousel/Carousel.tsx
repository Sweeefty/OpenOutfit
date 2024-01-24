/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";

export const Caroussel = () => (
  <Carousel autoPlay width="40%" >
    <div>
      <img
        alt=""
        src="https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2023/11/01/adidas_395697_IM2079_20231113T153005_01.jpg"
        style={{ maxWidth: "100%", maxHeight: "100%" }}  // Ajout de styles pour ajuster la taille de l'image
      />
      <p className="legend">T-shirt Adidas Vintage</p>
    </div>
    <div>
      <img
        alt=""
        src="https://i.etsystatic.com/8346725/r/il/c52d23/3881203560/il_570xN.3881203560_fb3e.jpg"
        style={{ maxWidth: "100%", maxHeight: "100%" }}  // Ajout de styles pour ajuster la taille de l'image
      />
      <p className="legend">T-shirt Nike Vintage</p>
    </div>
    <div>
      <img
        alt=""
        src="https://www.thelaststep.fr/storage/products/6762/thumbs/800x600_me_WkB31WpX_AA3834-101_(1).jpg"
        style={{ maxWidth: "100%", maxHeight: "100%" }}  // Ajout de styles pour ajuster la taille de l'image
      />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);

export default Caroussel;
