import ItemCard from "../ItemCard/ItemCard"
function ItemList({productos}){
    return(
                
                <div className="item_list">

                    {
                      productos && productos.map((prod) => <ItemCard item={prod} key={prod.id}/>)   
                    }

                </div>
    )
}

export default ItemList