import CartButton from "../CartButton/CartButton"
function ItemCount({quantity, setQuantity, stock, AddCart}){

    const handleRemove = () =>{
        quantity > 1 && setQuantity(quantity - 1)
    }
    const handleAdd = () =>{
        quantity < stock && setQuantity(quantity + 1)
    }
    return(
        <div>
            <button onClick ={handleRemove} className="count_btn remove">-</button>    
            <span className="counter">{quantity}</span>
            <button onClick ={handleAdd} className="count_btn add">+</button>
            <CartButton AddCart={AddCart}/>
        </div>
        
    )
}

export default ItemCount