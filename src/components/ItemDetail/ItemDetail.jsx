import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import GeneralDescription from "../GeneralDescription/GeneralDescription";

function ItemDetail({ productos }) {
  
  const { isInCart, AddToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const { image, name, price, stock, id, color, memory, ram} = productos;
  const precio_pesos = productos.price*490
  const precio_pesos_cuotas = productos.price*490*1.5
  const precio_usd = productos.price*1.5

    if (!productos) {
      return <LoadingSpinner/>
    }

    const handleAddCart = () =>{
      const AddCart = {
        ...productos, 
        quantity
      }
      AddToCart(AddCart)
    }
    
    return (
      <div className="item_detail_cnt">
        
        <div className="info">
          <div className="info_img_contain">
            <img src={image} alt="" className="info_img" />
          </div>
        <div className="info_info">
            <div className="info_text">
              <h3 className="info_name">{name} {color} {memory} {ram} </h3>
            </div>
            <div className="info_prices">
              <h4 className="info_mp">Oferta un solo pago</h4>
                <p className="info_price"> ARS {precio_pesos} </p>
                <p className="info_price">USD {price}</p>
            </div>
            <div className="info_prices">
              <h4 className="info_mp">Precio de lista</h4>
              <p className="info_price"> ARS {precio_pesos_cuotas}</p>
              <p className="info_price">USD {precio_usd}</p>
            </div>
            <div className="info_text">
                <h3 className="info_name">Formas de pago</h3>
            </div>
            
            {
              isInCart(id)
                          ? <Link to={'/buy'}><h3 className="buy_button">Ir a Comprar</h3></Link> 
                          : <ItemCount 
                              quantity={quantity}
                              setQuantity={setQuantity}
                              stock={stock}
                              AddCart={handleAddCart}
                            />
            }
        </div>       
      </div>
      <GeneralDescription productos={productos}/>
      </div>
      
      
    );
  }
  
  export default ItemDetail;