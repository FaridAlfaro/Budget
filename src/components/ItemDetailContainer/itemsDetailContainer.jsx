import { useEffect, useState } from "react";
import pedirDatos from "../../helpers/pedirDatos";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemDetailContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState(null);
  const { productoId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const docRef = doc(db, "products", productoId);

    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          const product = {
            id: doc.id,
            ...doc.data(),
          };
          setProductos(product);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });

    // pedirDatos()
    //         .then((data) => setProductos(data.find((el) => el.id === Number(productoId))))
    //         .catch(error => console.log(error), setIsLoading(false))
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader_contain">
          <FontAwesomeIcon icon={faSpinner} spin size="2x" className="loader" />
        </div>
      ) : (
        <ItemDetail productos={productos} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
