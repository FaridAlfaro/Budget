import AllCategoryNav from './NavBarComponents/AllCategory'
import NavConten from './NavBarComponents/NavConten'
import FeaturedCategory from './NavBarComponents/FeaturedCategory'
import Search from './NavBarComponents/Search';
import Logo from '../../../img/LOGO/Recurso 135.svg'
import { Link } from 'react-router-dom'
function NavBar(){
    const categorias = [
        { id: "Celulares", name: "Celulares" },
        { id: "Consolas", name: "Consolas" },
        { id: "Drones", name: "Drones" },
        { id: "Cámaras", name: "Cámaras" },
        { id: "Videojuegos", name: "Videojuegos" },
      ];
      
    return(
        <header className='header_nav'>
            <div className="container_logo">
                <Link to='/' className='a_nav'>
                    <img src={Logo} className="logo"/>
                </Link>
                <Search />
                <NavConten />
            </div>
            <div className="nav-container">
                <AllCategoryNav />
                <FeaturedCategory categorias={categorias} />
            </div>
        </header>
    )
}

export default NavBar