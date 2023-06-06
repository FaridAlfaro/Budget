import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HoverMenu(props) {
  return (
    <li className="">
      <div className="category-first-list">
        {props.categorias.map((categoria) => (
          <div className='all-category-list-item' key={categoria.id}>
            <Link
                key={categoria.id}  // Agregamos la clave única para cada enlace
                to={`/productos/${categoria.id}`}
                className="a_nav all-category-list-link"
            >
                {categoria.name}
               <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
          
        ))}
      </div>
      {/* <div className="category-second-list">
        <ul className="ul_nav category-second-list-ul">
          {Array.isArray(props.item) &&
            props.item.length > 0 &&
            props.item.map((item) => (
              <li key={item.id} className="category-second-item">
                <a className="a_nav" href={item.url}>
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
        <div className="img-product-menu">
          <img src={props.img} alt="Product" />
        </div>
      </div> */}
    </li>
  );
}

export default HoverMenu;
