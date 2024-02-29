import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [id, setId] = useState(0);

  const handleBackClick = () => {
    setId((prevId) => (prevId - 1 + images.length) % images.length);
  };

  const handleForwardClick = () => {
    setId((prevId) => (prevId + 1) % images.length);
  };

  const currImage = images[id];

  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-title">{currImage.title}</div>
        <div className="carousel-subtitle">{currImage.subtitle}</div>
        <img className="carousel-img" src={currImage.img} alt="" />
      </div>
      <div className="arrow arrow-back" onClick={handleBackClick}>
        <ArrowBackIosIcon sx={{ color: "white" }} />
      </div>
      <div className="arrow arrow-forward" onClick={handleForwardClick}>
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Carousel;
