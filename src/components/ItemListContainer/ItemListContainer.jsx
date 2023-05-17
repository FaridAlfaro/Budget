import { useEffect, useState } from "react";
import pedirDatos from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import Title from "../Title section/Title";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    pedirDatos()
      .then((data) => {
        if (!categoryId) {
          setProductos(data);
          setIsLoading(false);
        } else {
          setProductos(data.filter((el) => el.category === categoryId));
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <Title title={`Productos${categoryId ? " - " + categoryId : ""}`} linkdir="/productos" link="ver todos" width="110px">
      {isLoading ? <LoadingSpinner /> : <ItemList productos={productos} />}
    </Title>
  );
}

export default ItemListContainer;
