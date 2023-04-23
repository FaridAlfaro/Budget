import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import imagen1 from 'https://i.ibb.co/cQJ2BSC/1.jpg';
import imagen2 from 'https://i.ibb.co/SBrpJKJ/2.jpg';
import imagen3 from 'https://i.ibb.co/yW1zLG3/3.jpg';
import imagen4 from 'https://i.ibb.co/mGtPvhn/4.jpg';
import imagen5 from 'https://i.ibb.co/JvZdBXS/5.jpg';

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
            <HoverMenu cat ="Celulares" item ={itemsA} img={imagen1}/>
            <HoverMenu cat = "Consolas" item ={itemsB} img={imagen2} />
            <HoverMenu cat = "Videojuegos" item ={itemsC} img={imagen3} />
            <HoverMenu cat = "Drones" item ={itemsD} img={imagen4} />
            <HoverMenu cat = "Cámaras" item ={itemsE} img={imagen5} />
          </ul>
        </label>
      </nav>
    );
  }

export default AllCategoryNav;