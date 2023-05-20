import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function CartButton() {
  return (
    <button className="cart_button">
      <FontAwesomeIcon icon={faShoppingCart} className="cart_icon" />
      <span className="cart_text"></span>
    </button>
  );
}

export default CartButton;