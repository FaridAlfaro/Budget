import AllCategoryNav from './NavBarComponents/AllCategory'
import NavConten from './NavBarComponents/NavConten'
import FeaturedCategory from './NavBarComponents/FeaturedCategory'
import Search from './NavBarComponents/Search';

function NavBar(){
    return(
        <header>
            <div className="container">
                <a href="/index.html">
                    <img src="/img/LOGO/Recurso 135.svg" className="logo" alt />
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
