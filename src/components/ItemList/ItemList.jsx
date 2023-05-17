import Item from "../Item/Item"
function ItemList({productos}){
    return(
                
                <div className="item_list">

                    {
                      productos && productos.map((prod) => <Item item={prod} key={prod.id}/>)   
                    }

                </div>
    )
}

export default ItemList