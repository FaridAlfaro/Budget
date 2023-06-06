import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import HoverMenu from './HoverMenu';

function AllCategoryNav() {
  
  const categorias = [
    { id: "Celulares", name: "Celulares" },
    { id: "Consolas", name: "Consolas" },
    { id: "Drones", name: "Drones" },
    { id: "Cámaras", name: "Cámaras" },
    { id: "Videojuegos", name: "Videojuegos" },
    { id: "", name: "Todos" }
  ];
  
    return(
      <nav className="all-category-nav">
        <label className="label_nav open-menu-all label_nav" htmlFor="open-menu-all">
          <input
            className="input-menu-all"
            id="open-menu-all"
            type="checkbox"
            name="menu-open"
          />
          <span className="all-navigator">
           <FontAwesomeIcon icon={faBars} /><span className='span_nav'>Categórias</span>{" "}
           <FontAwesomeIcon icon={faAngleDown} />
           <FontAwesomeIcon icon={faAngleUp} />  
          </span>
          <ul className="ul_nav all-category-list">
            <HoverMenu categorias={categorias}/>
          </ul>
        </label>
      </nav>
    );
  }

export default AllCategoryNav;