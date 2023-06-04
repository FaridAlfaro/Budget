import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CartButton from "../CartButton/CartButton";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
function ItemDetail({ productos }) {
    if (!productos) {
      return <LoadingSpinner/>
    }
  
    const { image, name, price, description, stock, id} = productos;
    const precio_pesos = productos.price*490
    const precio_pesos_cuotas = productos.price*490*1.5
    const precio_usd = productos.price*1.5
    const { AddToCart, isInCart } = useContext(CartContext)
    console.log( isInCart(id) )
    const [quantity, setQuantity] = useState(1)
    const handleAddCart = () =>{
      const AddCart = {
        ...productos, 
        quantity
      }
      AddToCart(AddCart)
    }
    return (
      <div>
        <div className="info">
        <img src={image} alt="" className="info_img" />
        <div className="info_info">
            <div className="info_text">
                <h3 className="info_name">{name}</h3>
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
            
            {
              isInCart(id)
                          ? <h2>Ir a Comprar</h2>
                          : <ItemCount 
                              quantity={quantity}
                              setQuantity={setQuantity}
                              stock={stock}
                              AddCart={handleAddCart}
                            />
            }
        </div>       
      </div>
      <div className="info_description">
        <h3 className="info_name">{name}</h3>
        <p className="">{description}</p>
        <div className="caracteristicas">
            <h4 className="carac_title">Caracteristicas</h4>
            <ul className="carac_items">
              <li className="carac_item">Almacenamiento:</li>
              <li className="carac_item">Tamaño</li>
              <li className="carac_item">Procesador:</li>
              <li className="carac_item">Pantalla:</li>
              <li className="carac_item">Cámara:</li>
            </ul>
        </div>
      </div> 
      </div>
      
      
    );
  }
  
  export default ItemDetail;