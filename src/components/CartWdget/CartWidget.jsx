import React, { useState, useContext, useEffect, useRef } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cart from '../Cart/Cart';
import { CartContext } from '../Context/CartContext';

function CartWidget() {
  const [showCarrito, setShowCarrito] = useState(false);
  const { cart } = useContext(CartContext);
  const cartNum = cart.length;
  const cartWidgetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartWidgetRef.current && !cartWidgetRef.current.contains(event.target)) {
        setShowCarrito(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggleCarrito = () => {
    setShowCarrito(!showCarrito);
  };

  return (
    <>
      <li className="nav-content-item" ref={cartWidgetRef}>
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
