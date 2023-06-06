function GeneralDescription({ productos }) {
    const { name, description, color, year, resolution, memory, ram, cpu, dimensions } = productos;
    
    return (
      <div className="info_description">
        <h3 className="info_name">{name}</h3>
        <p className="">{description}</p>
        <div className="caracteristicas">
          <h4 className="carac_title">Caracteristicas:</h4>
          <ul className="carac_items">
            {color && <li className="carac_item">Color: {color}</li>}
            {memory && <li className="carac_item">Almacenamiento: {memory}</li>}
            {ram && <li className="carac_item">Ram: {ram}</li>}
            {cpu && <li className="carac_item">Procesador: {cpu}</li>}
            {resolution && <li className="carac_item">Resolución: {resolution}</li>}
            {year && <li className="carac_item">Año de lanzamiento: {year}</li>}
            {dimensions && <li className="carac_item">Tamaño: {dimensions}</li>}
          </ul>
        </div>
      </div>
    );
  }
  
  export default GeneralDescription;
  