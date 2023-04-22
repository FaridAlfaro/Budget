function FeaturedCategory(){
    const categorias = ["Celulares", "Consolas", "Drones", "Cámaras", "Videojuegos"];
    const links = ["#", "#", "#", "#", "#"];
    
    return(
      <nav className="featured-category">
        <ul className="nav-row">
          {categorias.map((categoria, index) => (
            <li className="nav-row-list" key={index}>
              <a href={links[index]} className="nav-row-list-link">
                {categoria}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default FeaturedCategory;