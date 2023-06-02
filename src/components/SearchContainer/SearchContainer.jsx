import React, { useEffect, useState } from "react";
import pedirDatos from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import Title from "../Title section/Title";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function ItemListContainer() {
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    setIsLoading(true);

    pedirDatos()
      .then((data) => {
        setProductos(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [search]);

  const filteredList = search
    ? productos.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <Title
      title={`Coincidencias`}
      linkdir="/productos"
      link="ver todos"
      width="110px"
    >
      {isLoading ? <LoadingSpinner /> : <ItemList productos={filteredList} />}
    </Title>
  );
}

export default ItemListContainer;

