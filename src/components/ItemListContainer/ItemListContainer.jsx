import { useEffect, useState } from "react";
import pedirDatos from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import Title from "../Title section/Title";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import NotFound from "../NotFound/NotFound";
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../../firebase/config";
function ItemListContainer() {
  const [searchParams] = useSearchParams();
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  const search = searchParams.get("search");
  
  useEffect(() => {
    setIsLoading(true);
    
    const productosRef = collection(db, "products")
    const q = categoryId
                        ? query(productosRef, where("category", "==", categoryId))
                        : productosRef
    getDocs(q)
                          .then((res) => {
                            const docs = res.docs.map((doc) => {
                              return {
                                ...doc.data(),
                                id: doc.id
                              }
                            })
                            setProductos(docs)
                            setIsLoading(false)
                          })
                          .catch((error) => {
                            console.log(error);
                            setIsLoading(false);
                          })
    
    // pedirDatos()
    //   .then((data) => {
    //     if (search) {
    //       setProductos(
    //         data.filter((el) =>
    //           el.name.toLowerCase().includes(search.toLowerCase())
    //         )
    //       );
    //     } else if (!categoryId) {
    //       setProductos(data);
    //     } else {
    //       setProductos(data.filter((el) => el.category === categoryId));
    //     }
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setIsLoading(false);
    //   });
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
  } else if (productos.length === 0) {
    content = <NotFound />;
  } else {
    content = (
      <Title title={title} linkdir="/productos" link="ver todos" width="110px">
        <ItemList productos={productos} />
      </Title>
    );
  }

  return <div>{content}</div>;
}

export default ItemListContainer;

