import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/main.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import img1 from "../img/header/1.png";
import img2 from "../img/header/2.png";
import img3 from "../img/header/3.png";

function App() {
  const images = [img1, img2, img3];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Carousel images={images} />
    </>
  );
}

export default App;