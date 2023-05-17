import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CartButton from "../CartButton/CartButton";
function ItemDetail({ productos }) {
    if (!productos) {
      return <LoadingSpinner/>
    }
  
    const { image, name, price, description } = productos;
  
    return (
      <div className="info">

        <img src={image} alt="" className="info_img" />
        <div className="info_info">
            <div className="info_text">
                <h3 className="info_name">{name}</h3>
                <p className="info_copy">{description}</p>
            </div>
            <div className="info_prices">
                <p className="info_price">USD {price}</p>
                <CartButton/>
            </div>
        </div>
        
        
      </div>
    );
  }
  
  export default ItemDetail;