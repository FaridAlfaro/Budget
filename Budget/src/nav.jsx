import '../css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle, faHeart, faShoppingCart, faBars, faAngleDown, faAngleUp, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function NavConten() {
  return(
    <nav className="nav-content">
      <ul className="nav-content-list">
        <li className="nav-content-item account-login">
          <label
            className="open-menu-login-account"
            htmlFor="open-menu-login-account"
          >
            <input
              className="input-menu"
              id="open-menu-login-account"
              type="checkbox"
              name="menu"
            />
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="login-text">
              Ingresar<strong>Unirse</strong>
            </span>{" "}
            <span className="item-arrow" />
            <ul className="login-list">
              <li className="login-list-item">
                <a href="#">Mi cuenta</a>
              </li>
              <li className="login-list-item">
                <a href="#">Unirse</a>
              </li>
              <li className="login-list-item">
                <a href="#">Cerrar sesión</a>
              </li>
            </ul>
          </label>
        </li>
        <li className="nav-content-item">
          <a className="nav-content-link" href="#">
            <FontAwesomeIcon icon={faHeart} className='heart'/>
          </a>
        </li>
        <li className="nav-content-item">
          <a className="nav-content-link" href="#">
            <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function AllCategoryNav() {
  return(
    <nav className="all-category-nav">
      <label className="open-menu-all" htmlFor="open-menu-all">
        <input
          className="input-menu-all"
          id="open-menu-all"
          type="checkbox"
          name="menu-open"
        />
        <span className="all-navigator">
         <FontAwesomeIcon icon={faBars} /><span>Categórias</span>{" "}
         <FontAwesomeIcon icon={faAngleDown} />
         <FontAwesomeIcon icon={faAngleUp} />  
        </span>
        <ul className="all-category-list">
          <li className="all-category-list-item">
            <a
              href="#"
              className="all-category-list-link"
            >
              Celulares
               <FontAwesomeIcon icon={faAngleRight} /> 
            </a>
            <div className="category-second-list">
              <ul className="category-second-list-ul">
                <li className="category-second-item">
                  <a href="#">Iphone</a>
                </li>
                <li className="category-second-item">
                  <a href="#">Samsung</a>
                </li>
                <li className="category-second-item">
                  <a href="#">Xiaomi</a>
                </li>
              </ul>
              <div className="img-product-menu">
                <img src="https://i.ibb.co/Vvndkmy/banner.jpg" />
              </div>
            </div>
          </li>
          <li className="all-category-list-item">
            <a
              href="#"
              className="all-category-list-link"
            >
              Consolas <FontAwesomeIcon icon={faAngleRight} /> 
            </a>
          </li>
          <li className="all-category-list-item">
            <a
              href="#"
              className="all-category-list-link"
            >
              Celulares
              <FontAwesomeIcon icon={faAngleRight} /> 
            </a>
          </li>
          <li className="all-category-list-item">
            <a
              href="#"
              className="all-category-list-link"
            >
              Drones
              <FontAwesomeIcon icon={faAngleRight} /> 
            </a>
          </li>
          <li className="all-category-list-item">
            <a
              href="#"
              className="all-category-list-link"
            >
              Cámaras
              <FontAwesomeIcon icon={faAngleRight} /> 
            </a>
          </li>
        </ul>
      </label>
    </nav>
  );
}
function FeaturedCategory(){
  return(
    <nav className="featured-category">
      <ul className="nav-row">
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Celulares
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Consolas
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Drones
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Cámaras
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Videojuegos
          </a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <header>
  <div className="container">
    <a href="/index.html">
      <img src="/img/LOGO/Recurso 135.svg" className="logo" alt />
    </a>
    <label className="open-search" htmlFor="open-search">
      <FontAwesomeIcon icon={faSearch}  className='fa-search'/>
      <input
        className="input-open-search"
        id="open-search"
        type="checkbox"
        name="menu"
      />
      <div className="search">
        <button className="button-search">
          <FontAwesomeIcon icon={faSearch} className='fa-search'/>
        </button>
        <input
          type="text"
          placeholder="Encontrá aquello que buscas"
          className="input-search"
        />
      </div>
    </label>
    <NavConten />
    {/* <nav className="nav-content">
      <ul className="nav-content-list">
        <li className="nav-content-item account-login">
          <label
            className="open-menu-login-account"
            htmlFor="open-menu-login-account"
          >
            <input
              className="input-menu"
              id="open-menu-login-account"
              type="checkbox"
              name="menu"
            />
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="login-text">
              Ingresar<strong>Unirse</strong>
            </span>{" "}
            <span className="item-arrow" />
            <ul className="login-list">
              <li className="login-list-item">
                <a href="#">Mi cuenta</a>
              </li>
              <li className="login-list-item">
                <a href="#">Unirse</a>
              </li>
              <li className="login-list-item">
                <a href="#">Cerrar sesión</a>
              </li>
            </ul>
          </label>
        </li>
        <li className="nav-content-item">
          <a className="nav-content-link" href="#">
            <FontAwesomeIcon icon={faHeart} className='heart'/>
          </a>
        </li>
        <li className="nav-content-item">
          <a className="nav-content-link" href="#">
            <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
          </a>
        </li>
      </ul>
    </nav> */}
  </div>
  <div className="nav-container">
  <AllCategoryNav />
  <FeaturedCategory />
    {/* <nav className="featured-category">
      <ul className="nav-row">
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Celulares
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Consolas
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Drones
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Cámaras
          </a>
        </li>
        <li className="nav-row-list">
          <a href="#" className="nav-row-list-link">
            Videojuegos
          </a>
        </li>
      </ul>
    </nav> */}
  </div>
</header>
  )
}

export default App


