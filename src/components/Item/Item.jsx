import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Item({ item }) {
  const { image, price, name, id } = item;

  return (
    <div className="items">
      <img src={image} alt="" className="item_img" />
      <p className="item_price">USD {price}</p>
      <div className="item_info">
        <h3 className="item_name">{name}</h3>
      </div>
      <div className="item_btns">
        <Link to={`/productos/info/${id}`}>
            <button className="item_btn">Comprar</button>
        </Link>
        <Link to={`/productos/info/${id}`}>
            <button className="item_heart">
                <FontAwesomeIcon className="item_heart_h" icon={faHeart} />
            </button>
        </Link>
      </div>
      
    </div>
  );
}

export default Item