import React, { useState } from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartWidget() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <li className="nav-content-item">
      <a className="a_nav nav-content-link" href="#" onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
        <p className="count">{count}</p>
      </a>
    </li>
  );
}

export default CartWidget;