import { Link } from "react-router-dom"

function Item({item}){
    const {image, price, name, id} = item
    return(
        <div className="items">
            <img src={image} alt="" className="item_img"/>
            <p className="item_price">USD {price}</p>
            <div className="item_info">
                <h3 className="item_name">{name}</h3>
            </div> 
            <Link to={`/productos/info/${id}`}><button className="item_btn">Comprar</button></Link>
        </div>
    )
}

export default Item