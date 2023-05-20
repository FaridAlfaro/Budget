
import React, { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarritoComponent from '../Cart/Cart';

function CartWidget() {
  const [showCarrito, setShowCarrito] = useState(false);

  const handleToggleCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  return (
    <>
      <li className="nav-content-item">
          <FontAwesomeIcon onClick={handleToggleCarrito} className='a_nav nav-content-link' icon={faShoppingCart} style={{cursor: 'pointer'}}/>
          <p className="count">0</p>
      </li>
      {showCarrito && <CarritoComponent onClose={handleToggleCarrito} />}
    </>
  );
}

export default CartWidget;

