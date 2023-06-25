import Carousel from "../Carousel/Carousel"
import Title from "../Title section/Title"
import CircularDemo from "../Carousel/CarouselItems";
import Pasos from "../Pasos/Pasos"
import img1 from "../../../img/header/1.png";
import img2 from "../../../img/header/2.png";
import img3 from "../../../img/header/3.png";
import { Link } from "react-router-dom";

function Home(){
    const images = [img1, img2, img3];
    return(
        <>
        <Carousel images={images} />
        <Title title = 'Tenemos los mejores precios, conoce nuestros productos' linkdir = '#' link ='ver más' width = '110px'>
        <Link to={'/'}>
            <div className="items">
                <button className="item_btn">Ir de compras</button>
            </div>
        </Link>
        </Title>
        <Title title = 'Como Comprar' linkdir = '#' link ='ver más' width = '325px'>
            <Pasos/>
        </Title>
      </>
    )
}
export default Home 