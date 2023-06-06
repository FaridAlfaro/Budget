import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Navigate } from 'react-router-dom';
import { collection, addDoc, writeBatch, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Buy from "../../../img/Persons/2.svg";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Este campo es requerido")
    .min(3, "El nombre es muy corto")
    .max(20, "El nombre es demasiado largo"),
  direccion: Yup.string()
    .required("Este campo es requerido")
    .min(6, "La direccion es muy corta")
    .max(20, "La direccion es demasiado larga"),
  email: Yup.string()
    .email("El email no es válido")
    .required("Este campo es requerido")
});

const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const generarOrden = async (values) => {
    const orden = {
      client: values,
      items: cart.map(item => ({ id: item.id, nombre: item.nombre, cantidad: item.cantidad })),
      total: totalCart(),
      fyh: new Date()
    };

    const batch = writeBatch(db);
    const productosRef = collection(db, "products");
    const ordersRef = collection(db, "orders");

    const promesas = cart.map((productos) => {
      const ref = doc(productosRef, productos.id);
      return getDoc(ref); // Utilizar getDoc en lugar de ref.get()
    });

    const productos = await Promise.all(promesas);

    const outOfStock = [];

    productos.forEach((doc) => {
      const item = cart.find((i) => i.id === doc.id);
      const stock = doc.data().stock;

      if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, orden)
        .then((docRef) => {
          batch.commit();
          setOrderId(docRef.id);
          emptyCart();
        })
        .catch((error) => {
          console.error("Error al generar la orden:", error);
        });
    } else {
      console.log(outOfStock);
      alert("Hay items sin stock");
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>Tu compra se registró exitosamente!</h2>
        <hr />
        <p>Guardá tu número de orden: {orderId}</p>
        <Link to="/">Volver</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <Formik
        initialValues={{
          nombre: "",
          direccion: "",
          email: ""
        }}
        validationSchema={schema}
        onSubmit={generarOrden}
      >
        {() => (
          <Form className="login_cnt">
            <Field name="nombre" type="text" className="login_input" placeholder="Nombre" />
            <ErrorMessage name="nombre" component="p" />
            <Field name="direccion" type="text" className="login_input" placeholder="Dirección" />
            <ErrorMessage name="direccion" component="p" />
            <Field name="email" type="email" className="login_input" placeholder="Email" />
            <ErrorMessage name="email" component="p" />

            <button className="cart_buy" type="submit">Finalizar compra</button>
          </Form>
        )}
      </Formik>

      <img src={Buy} alt="" />
    </div>
  );
};

export default Checkout;
