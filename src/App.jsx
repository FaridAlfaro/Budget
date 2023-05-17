import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/main.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';  
import ItemDetailContainer from "./components/ItemDetailContainer/itemsDetailContainer";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>
        <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
        <Route path='/productos/info/:productoId' element={ <ItemDetailContainer/> }/>
        <Route path="/Home" element={ <Home/> }/>
        <Route path="*" element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;