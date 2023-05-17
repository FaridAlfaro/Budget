import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <li className="nav-content-item">
      <Link to="/cart" className='a_nav nav-content-link'>
        <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
        <p className="count">0</p>
      </Link>
    </li>
  );
}

export default CartWidget;
