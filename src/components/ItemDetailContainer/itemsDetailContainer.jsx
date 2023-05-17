import { useEffect, useState } from "react"
import pedirDatos from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ItemDetailContainer(){
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState(null)
  const { productoId } = useParams()

    useEffect(() => {
      setIsLoading(true); 

      pedirDatos()
              .then((data) => setProductos(data.find((el) => el.id === Number(productoId))))
              .catch(error => console.log(error), setIsLoading(false))
            }, [])
            
    return(
          <div>
          {isLoading ? (
            <div className="loader_contain"><FontAwesomeIcon icon={faSpinner} spin size="2x" className="loader"/></div>
          ) : (
            <ItemDetail productos={ productos } />
          )}
          </div>
    )
}

export default ItemDetailContainer