import Card from "./Card"
function Pasos (props){
    return(
        <>
        <div className="Pasos">
        <Card 
        cardNum="1"
        tile="Elegi tus productos" 
        img="https://i.ibb.co/PWBBdG4/Tecno-City.jpg" 
        copy="Selecciona los productos que desees y agregalos al carrito" 
        btn="+ info"
        />
        <Card 
        cardNum="2"
        tile="Inicia el proceso de compra" 
        img="https://i.ibb.co/2hHywhL/Tecno-City.png" 
        copy="Selecciona los productos que desees y agregalos al carrito" 
        btn="+ info"
        />
        <Card 
        cardNum="3"
        tile="Elegi tus productos" 
        img="https://i.ibb.co/r6t5F9P/Tecno-City.png" 
        copy="Selecciona los productos que desees y agregalos al carrito" 
        btn="+ info"
        />
        </div>
        </>
    )
}

export default Pasos