function FeaturedCategory(props) {
  return (
    <nav className="featured-category">
      <ul className="ul_nav nav-row">
        {props.categorias.map((categoria, index) => (
          <li className="nav-row-list" key={index}>
            {/* <Link to={props.links[index]} className="a_nav nav-row-list-link">
              {categoria}
            </Link> */}
            <a href={props.links[index]} className="a_nav nav-row-list-link">
              {categoria}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default FeaturedCategory