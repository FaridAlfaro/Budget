import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import HoverMenu from './HoverMenu';
function AllCategoryNav() {
        const itemsA = [
          { id: 1, name: 'Iphone', url: 'https://github.com/FaridAlfaro/Budget'},
          { id: 2, name: 'Samsung', url: 'https://instagram.com' },
          { id: 3, name: 'Xiaomi', url: '#' }
        ];
        const itemsB = [
          { id: 1, name: 'Switch', url: '#' },
          { id: 2, name: 'PlayStation', url: '#' },
          { id: 3, name: 'Xbox', url: '#' }
        ];
        const itemsC = [
          { id: 1, name: 'Switch', url: '#' },
          { id: 2, name: 'PlayStation', url: '#' },
          { id: 3, name: 'Xbox', url: '#' },
          { id: 4, name: 'Coleccionables', url: '#' }
        ];
        const itemsD = [
          { id: 1, name: 'DJI', url: '#' },
          { id: 2, name: 'Otras marcas', url: '#' }
        ];
        const itemsE = [
          { id: 1, name: 'Nikon', url: '#' },
          { id: 2, name: 'Canon', url: '#' },
          { id: 3, name: 'GoPro', url: '#' }
        ];
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
            <HoverMenu cat ="Celulares" item ={itemsA} img= "/img/Categorias/1.jpg"/>
            <HoverMenu cat = "Consolas" item ={itemsB} img= "/img/Categorias/2.jpg"/>
            <HoverMenu cat = "Videojuegos" item ={itemsC} img= "/img/Categorias/3.jpg"/>
            <HoverMenu cat = "Drones" item ={itemsD} img= "/img/Categorias/4.jpg"/>
            <HoverMenu cat = "Cámaras" item ={itemsE} img= "/img/Categorias/5.jpg"/>
          </ul>
        </label>
      </nav>
    );
  }

export default AllCategoryNav;