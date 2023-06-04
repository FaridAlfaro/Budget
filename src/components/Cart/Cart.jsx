import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ onClose }) => {
  const { cart, totalCart, remove } = useContext(CartContext);

  return (
    <div className="carrito_container">
      <h4 className="cart_title">Carrito</h4>
      <button className="cart_close" onClick={onClose}>
        Cerrar
      </button>
      <div className="carrito_detail">
        <ul className="cart_ul">
          <li className="cart_ll">Item</li>
          <li className="cart_ll">Precio</li>
          <li className="cart_ll">Cantidad</li>
        </ul>
        <div className="cart_items_content">
        {cart.length > 0 ? (
          cart.map((producto) => (
            <div className="cart_item" key={producto.id}>
              <img className="cart_img" src={producto.image} alt="" />
              <h4 className="cart_item_title">{producto.name}</h4>
              <p className="cart_price">{producto.price}</p>
              <p className="cart_num">{producto.quantity}</p>
              <button className='cart_remove' onClick={()=> {remove(producto.id)}}><FontAwesomeIcon className='icon_remove' icon={faTrash} /></button>
            </div>
          ))
        ) : (
          <p className="cart_empty"> Tu carrito esta vacio</p>
        )}
        </div>
        <div className="cart_logic">
          <h4 className="cart_total">Total:</h4>
          <p className="cart_total_cash">${totalCart()}</p>
          <Link to="/buy">
          <button className="cart_buy">Comprar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

