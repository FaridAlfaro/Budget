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
                to={categoria.id == "Todos" ? ''
                                            : `/productos/${categoria.id}`}
                className="a_nav all-category-list-link"
            >
                {categoria.name}
               <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        ))}
      </div>
    </li>
  );
}

export default HoverMenu;
