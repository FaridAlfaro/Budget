import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../Context/CartContext';
import BuyEmpty from '../BuyEmpty/BuyEmpty';
import Title from "../Title section/Title"
function CartPay() {
  const { cart, totalCart, remove } = useContext(CartContext);

  if (cart.length > 0) {
    return (
      <Title title="Carrito" link="Seguir comprando" linkdir="/">
        <div className="buy_container">
          <div className="buy_detail">
            <ul className="buy_ul">
              <li className="buy_ll">Item</li>
              <li className="buy_ll">Descripción</li>
              <li className="buy_ll">Precio</li>
              <li className="buy_ll">Cantidad</li>
            </ul>
            {cart.map((producto) => (
              <div className="cart_item cart_item_buy" key={producto.id}>
                <img className="cart_img cart_img_buy" src={producto.image} alt="" />
                <h4 className="cart_item_title cart_item_title_buy">{producto.name} - {producto.color} - {producto.year} - {producto.resolution} - {producto.memory} - {producto.ram} - {producto.cpu} - {producto.dimensions} </h4>
                <p className="cart_price cart_price_buy">USD {producto.price}</p>
                <p className="cart_num cart_num_buy">{producto.quantity}</p>
                <button className='cart_remove cart_remove_buy' onClick={() => { remove(producto.id) }}>
                  <FontAwesomeIcon className='icon_remove' icon={faTrash} />
                </button>
              </div>
            ))}
            <div className="buy_logic">
              <h4 className="buy_total">Total:</h4>
              <p className="buy_total_cash">${totalCart()}</p>
              
              <Link to="/checkout"><button className="cart_buy">Terminar mi compra</button></Link>
            </div>
          </div>
        </div>
      </Title>
    );
  }

  return (
        <BuyEmpty title='Tu carrito esta vacio' btn='Ir de compras'/>
  );
}

export default CartPay;
