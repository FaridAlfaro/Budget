import { Link } from "react-router-dom";

function FeaturedCategory(props) {
  return (
    <nav className="featured-category">
      <ul className="ul_nav nav-row">
        {props.categorias.map((categoria) => (
          <li className="nav-row-list" key={categoria.id}>
            <Link to={`/productos/${categoria.id}`} className="a_nav nav-row-list-link">
              {categoria.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FeaturedCategory;

