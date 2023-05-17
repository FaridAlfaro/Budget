import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import pedirDatos from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import Title from "../Title section/Title";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams()

  useEffect(() => {
    pedirDatos()
      .then((data) => {
        if (categoryId){
          setProductos(data)
          setIsLoading(false);
        } else {
          setProductos(data.filter((el)=> el.categoryId === categoryId))
          setProductos(data)
          setIsLoading(false);
        }
        setProductos(data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Title title = 'Productos' linkdir = '#' link ='ver más' width = '110px'>

      {isLoading ? (
        <FontAwesomeIcon icon={faSpinner} spin size="2x" className="loader"/>
      ) : (
        <ItemList productos={productos} />
      )}
    </Title>
  );
}

export default ItemListContainer;
