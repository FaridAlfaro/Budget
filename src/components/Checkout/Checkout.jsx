import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate, Navigate } from 'react-router-dom';
import { collection, addDoc, writeBatch, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import submit from '../../../img/Persons/submit.svg';
import first from '../../../img/Persons/first.svg'
import des from '../../../img/Persons/descuento.svg'
import map from '../../../img/Persons/map.svg'
import Order from "../Order/Order";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Campo obligatorio")
    .min(3, "El nombre es muy corto")
    .max(20, "El nombre es demasiado largo"),
  dni: Yup.string()
    .required("Campo obligatorio")
    .min(8, "El DNI es demasiado corto")
    .max(12, "El DNI es demasiado largo"),
  email: Yup.string()
    .email("Campo obligatorio")
    .required("Este campo es requerido"),
  telefono: Yup.string()
    .required("Campo obligatorio")
    .min(7, "El número de teléfono es demasiado corto")
    .max(15, "El número de teléfono es demasiado largo"),
  direccion: Yup.string()
    .when('currentStep', {
      is: 2,
      then: Yup.string().required("Campo obligatorio")
    }),
  tipoCaja: Yup.string()
    .when('currentStep', {
      is: 3,
      then: Yup.string().required("Campo obligatorio")
    }),
  tipoMoneda: Yup.string()
    .when('currentStep', {
      is: 3,
      then: Yup.string().required("Campo obligatorio")
    })
});

const Checkout = ({ currentStep, nextStep, prevStep }) => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const generarOrden = async (values) => {
    const orden = {
      client: values,
      productos: cart.map(productos => ({ id: productos.id, nombre: productos.name, cantidad: productos.quantity })),
      total: totalCart(),
      fyh: new Date()
    };

    const batch = writeBatch(db);
    const productosRef = collection(db, "products");
    const ordersRef = collection(db, "orders");

    const promesas = cart.map((productos) => {
      const ref = doc(productosRef, productos.id);
      return getDoc(ref); 
    });

    const productos = await Promise.all(promesas);
    const outOfStock = [];

    productos.forEach((doc) => {
      const productos = cart.find((i) => i.id === doc.id);
      const stock = doc.data().stock;

      if (stock >= productos.quantity) {
        batch.update(doc.ref, {
          stock: stock - productos.quantity
        });
      } else {
        outOfStock.push(productos);
      }
    });

    if (outOfStock.length === 0) {
      try {
        const docRef = await addDoc(ordersRef, orden);
        batch.commit();
        setOrderId(docRef.id);
        emptyCart();
        navigate(`/order/${docRef.id}`);
      } catch (error) {
        console.error("Error al generar la orden:", error);
      }
    } else {
      console.log(outOfStock);
      alert("Hay items sin stock");
    }
  };

  if (orderId) {
    return (
      <Order/>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }


  return (
    <div className="buyed">
      <Formik
        initialValues={{
          nombre: "",
          dni: "",
          email: "",
          telefono: "",
          direccion: "",
          tipoCaja: "",
          tipoMoneda: ""
        }}
        validationSchema={schema}
        onSubmit={generarOrden}
        isInitialValid={false} 
      >
        {({ values, isValid }) => ( 
          <Form >
            {currentStep === 1 && (
              <> 
              <div className="empty">
                <img src={first} alt=""/>
              </div>
              
                <Field name="nombre" type="text" className="login_input" placeholder="Nombre" />
                <ErrorMessage name="nombre" component="p" />
                <Field name="dni" type="text" className="login_input" placeholder="DNI" />
                <ErrorMessage name="dni" component="p" />
                <Field name="email" type="email" className="login_input" placeholder="Email" />
                <ErrorMessage name="email" component="p" />
                <Field name="telefono" type="text" className="login_input" placeholder="Teléfono" />
                <ErrorMessage name="telefono" component="p" />
              </>
            )}

            {currentStep === 2 && (
              <><img src={map} alt="" className="empty" style={{maxHeight:'300px'}}/>
                <Field name="direccion" type="text" className="login_input" placeholder="Dirección (opcional)" />
                <ErrorMessage name="direccion" component="p" />
              </>
            )}

            {currentStep === 3 && (
              <><img src={des} alt="" className="empty" style={{maxHeight:'300px'}}/>
                <p style={{width:"250px"}}>Esta información nos ayudara a ofrecerte descuetos (opcional)</p>
                <Field name="tipoCaja" as="select" className="login_input">
                  <option value="">Te gustaría recibir tus productos</option>
                  <option value="con-caja">Con caja</option>
                  <option value="sin-caja">Sin caja</option>
                </Field>
                <ErrorMessage name="tipoCaja" component="p" />

                <Field name="tipoMoneda" as="select" className="login_input">
                  <option value="">Preferís pagar con</option>
                  <option value="con-pesos">Con pesos</option>
                  <option value="con-dolares">Con dólares</option>
                  <option value="con-cripto">Con cripto</option>
                </Field>
                <ErrorMessage name="tipoMoneda" component="p" />
              </>
            )}

            {currentStep === 4 && (
              <>
                <img src={submit} alt="" className="empty" style={{maxHeight:'300px'}}/>
                <p>Nombre: {values.nombre}</p>
                <p>DNI: {values.dni}</p>
                <p>Email: {values.email}</p>
                <p>Teléfono: {values.telefono}</p>
                <p>Dirección: {values.direccion}</p>
                <p>Tipo de caja: {values.tipoCaja}</p>
                <p>Tipo de moneda: {values.tipoMoneda}</p>
              </>
            )}

            {currentStep < 4 && (
                isValid ? ( 
                  <button className="item_btn" type="button" onClick={nextStep}>
                    Siguiente
                  </button>
                ) : (
                  <h3>Completar el formulario</h3>
                )
            )}

            {currentStep > 1 && (
              <button className="check_btn_prev" type="button" onClick={prevStep}>
                Retroceder
              </button>
            )}

            {currentStep === 4 && (
              <button className="buy_empty_btn" type="submit">
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
