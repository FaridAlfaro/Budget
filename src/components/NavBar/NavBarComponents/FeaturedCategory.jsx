function FeaturedCategory(){
    const categorias = ["Celulares", "Consolas", "Drones", "Cámaras", "Videojuegos"];
    const links = ["#", "#", "#", "#", "#"];
    
    return(
      <nav className="featured-category">
        <ul className="ul_nav nav-row">
          {categorias.map((categoria, index) => (
            <li className="nav-row-list" key={index}>
              <a href={links[index]} className="a_nav nav-row-list-link">
                {categoria}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default FeaturedCategory;