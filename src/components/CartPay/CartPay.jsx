import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Context/CartContext';
function CartPay(){
    const { cart, totalCart, remove } = useContext(CartContext);
    return(  
    <div className="buy_container">
    <h4 className="buy_title">Carrito</h4>
    <div className="buy_detail">
      <ul className="buy_ul">
        <li className="buy_ll">Item</li>
        <li className="buy_ll">Precio</li>
        <li className="buy_ll">Cantidad</li>
      </ul>
      {cart.length > 0 ? (
        cart.map((producto) => (
          <div className="cart_item cart_item_buy" key={producto.id}>
            <img className="cart_img cart_img_buy" src={producto.image} alt="" />
            <h4 className="cart_item_title cart_item_title_buy">{producto.name}</h4>
            <p className="cart_price cart_price_buy">{producto.price}</p>
            <p className="cart_num cart_num_buy">{producto.quantity}</p>
            <button className='cart_remove cart_remove_buy' onClick={()=> {remove(producto.id)}}><FontAwesomeIcon className='icon_remove' icon={faTrash} /></button>
          </div>
        ))
      ) : (
        <p className="buy_empty">Vacío</p>
      )}
      <div className="buy_logic">
        <h4 className="buy_total">Total:</h4>
        <p className="buy_total_cash">${totalCart()}</p>
      </div>
    </div>
  </div>
    )
}

export default CartPay