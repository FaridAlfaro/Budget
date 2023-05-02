import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/main.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Title from "./components/Title"
import Footer from "./components/Footer";
import img1 from "../img/header/1.png";
import img2 from "../img/header/2.png";
import img3 from "../img/header/3.png";
import CircularDemo from "./components/CarouselItems";

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css                                 // icons                                 // css utility
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
      <Title title = 'Ofertas' linkdir = '#' link ='ver más' width = '110px'/>
      <CircularDemo />
      <Title title = 'Un titulo un poco largo' linkdir = '#' link ='ver más' width = '325px'/>
      <Footer />
    </>
  );
}

export default App;