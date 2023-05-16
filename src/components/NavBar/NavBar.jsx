import AllCategoryNav from './NavBarComponents/AllCategory'
import NavConten from './NavBarComponents/NavConten'
import FeaturedCategory from './NavBarComponents/FeaturedCategory'
import Search from './NavBarComponents/Search';
import Logo from '../../img/LOGO/Recurso 135.svg'
function NavBar(){
    return(
        <header className='header_nav'>
            <div className="container_logo">
                <a href="/index.html" className='a_nav'>
                    <img src={Logo} className="logo" alt />
                </a>
                <Search />
                <NavConten />
            </div>
            <div className="nav-container">
                <AllCategoryNav />
                <FeaturedCategory />
            </div>
        </header>
    )
}

export default NavBar