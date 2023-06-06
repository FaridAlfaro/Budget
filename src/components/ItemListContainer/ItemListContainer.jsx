import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "../ItemList/ItemList";
import Title from "../Title section/Title";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import BuyEmpty from "../BuyEmpty/BuyEmpty";

function ItemListContainer() {
  const [searchParams] = useSearchParams();
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();
  const search = searchParams.get("search");

  useEffect(() => {
    setIsLoading(true);

    const productosRef = collection(db, "products");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        if (search) {
          setProductos(
            docs.filter((el) =>
              el.name.toLowerCase().includes(search.toLowerCase())
            )
          );
        } else {
          setProductos(docs);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [categoryId, search]);

  let title = null;
  if (search) {
    title = "Coincidencias";
  } else if (categoryId) {
    title = "Productos - " + categoryId;
  } else {
    title = "Productos";
  }

  let content = null;
  if (isLoading) {
    content = <LoadingSpinner />;
  } else if (productos && productos.length === 0) {
    content = <BuyEmpty title="No hay nada por aquí..." btn="Ver productos" />;
  } else {
    content = (
      <Title title={title} linkdir="/" link="ver todos" width="110px">
        <ItemList productos={productos} />
      </Title>
    );
  }

  return <div>{content}</div>;
}

export default ItemListContainer;
