function ItemCard({item}){
    const {id, image, price, name, description} = item
    return(
        <div className="items">
            <img src={image} alt="" className="item_img"/>
            <p className="item_price">USD {price}</p>
            <div className="item_info">
                <h3 className="item_name">{name}</h3>
                <p className="item_copy">{description}</p>
            </div> 
            <button className="item_btn">Comprar</button>
        </div>
    )
}

export default ItemCard