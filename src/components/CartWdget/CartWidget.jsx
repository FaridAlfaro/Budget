import React, { useState, useContext } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../Cart/Cart';
import { CartContext } from '../Context/CartContext';

function CartWidget() {
  const [showCarrito, setShowCarrito] = useState(false);
  const { cart } = useContext(CartContext);
  const cartNum = cart.length;
  
  const handleToggleCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  return (
    <>
      <li className="nav-content-item">
        <FontAwesomeIcon
          onClick={handleToggleCarrito}
          className='a_nav nav-content-link'
          icon={faShoppingCart}
          style={{cursor: 'pointer'}}
        />
        <p className="count">{cartNum}</p>
      </li>
      {showCarrito && <Cart onClose={handleToggleCarrito} />}
    </>
  );
}

export default CartWidget;
