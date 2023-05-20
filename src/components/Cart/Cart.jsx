// import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';

// const CarritoComponent = () => {
//   const [showCarrito, setShowCarrito] = useState(false);
//   const { carrito } = useParams();
//   const location = useLocation();

//   useEffect(() => {
//     if (carrito === 'Carrito') {
//       setShowCarrito(true);
//     } else {
//       setShowCarrito(false);
//     }
//   }, [carrito]);

//   const handleCloseCarrito = () => {
//     setShowCarrito(false);
//   };

//   return (
//     <>
//     <h1>Carrito</h1>
//       {showCarrito && (
//         <div className="carrito-container" style={{ right: 0 }}>
//           {/* Contenido del carrito */}
//           <h2>Carrito de Compras</h2>
//           {/* Aquí puedes agregar la lógica y los elementos necesarios para mostrar los productos del carrito */}
//           <button onClick={handleCloseCarrito}>Cerrar Carrito</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default CarritoComponent;

import React from 'react';
import image1 from '../../../img/items/switch-normal.webp'
import { Link } from 'react-router-dom';
const CarritoComponent = ({ onClose }) => {
  return (
    <div className="carrito_container">
    <h4 className='cart_title' >Carrito</h4>
      {/* Contenido del carrito */}
      <button className='cart_close' onClick={onClose}> Cerrar </button>
      <div className="carrito_detail">
      <ul className='cart_ul'>
        <li className='cart_ll'>Item</li>
        <li className='cart_ll'>Precio</li>
        <li className='cart_ll'>Cantidad</li>
      </ul>
       <div className='cart_item'>
        <img className='cart_img' src={image1} alt="" />
        <h4 className='cart_item_title'>Nintendo switch normal</h4>
        <p className='cart_price'>$5555</p>
        <p className='cart_num'>1</p>
       </div>
       <div className="cart_logic">
            <h4 className='cart_total'>Total:</h4>
            <p className='cart_total_cash'>$590</p>
            <Link to='/Home'><button className='cart_buy'>Comprar</button></Link>
       </div>
     </div>
    </div>
  );
};

export default CarritoComponent;
