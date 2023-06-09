import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/main.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/itemsDetailContainer";
import { CartProvider } from "./components/Context/CartContext";
import CartPay from "./components/CartPay/CartPay";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { AuthProvider } from "./components/Context/Authentication";
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/Order/Order";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import CheckoutContain from "./components/CheckoutContain/CheckoutContain";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={ <ItemListContainer/> }/>
              <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
              <Route path='/buy' element={ <CartPay/> }/>
              <Route path='/productos/info/:productoId' element={ <ItemDetailContainer/> }/>
              <Route path="/Home" element={ <Home/> }/>
              <Route path="/login" element={ <Login/> }/>
              <Route path="/register" element={ <Register/> }/>
              <Route path="/progress" element={ <ProgressBar/> }/>
              <Route path='/checkout' element={ <CheckoutContain/> }/>
              <Route path="/order/:orderId" element={<Order />} />
              <Route path="*" element={<Navigate to={'/Home'}/>}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
