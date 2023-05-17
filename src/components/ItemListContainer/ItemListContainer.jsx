import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import pedirDatos from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import Title from "../Title section/Title";
function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Title title = 'Productos' linkdir = '#' link ='ver más' width = '110px'>

      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} spin size="2x" className="loader"/> // Icono de carga mientras isLoading es true
      ) : (
        <ItemList productos={productos} />
      )}
    </Title>
  );
}

export default ItemListContainer;
