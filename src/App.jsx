import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/main.css";
import NavBar from "./components/NavBar/NavBar";
import Carousel from "./components/Carousel/Carousel";
import Title from "./components/Title"
import Footer from "./components/Footer/Footer";
import img1 from "../img/header/1.png";
import img2 from "../img/header/2.png";
import img3 from "../img/header/3.png";
import CircularDemo from "./components/Carousel/CarouselItems";
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
    <BrowserRouter>
    <>
      <NavBar />
      <Carousel images={images} />
      <Title title = 'Ofertas' linkdir = '#' link ='ver más' width = '110px'>
        <CircularDemo />
      </Title>
      <Title title = 'Como Comprar' linkdir = '#' link ='ver más' width = '325px'/>
       {/* <Pasos/> */}
      <Footer />
    </>
    </BrowserRouter>
  );
}

export default App;