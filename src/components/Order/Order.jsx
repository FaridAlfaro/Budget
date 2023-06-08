import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Title from '../Title section/Title';
const Order = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const docRef = doc(db, 'orders', orderId);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setOrder(docSnapshot.data());
        } else {
          console.log('La orden no existe');
        }
      } catch (error) {
        console.error('Error al obtener la orden:', error);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <p>Cargando orden...</p>;
  }

  return (
    <div>
      <Title title="Tu compra" link="Ayuda" linkdir='/help'>
        <div className='title_contain' style={{height:'80vh'}}>
            <h2 className='Title' style={{fontSize:'2rem'}}>Tu compra se registró exitosamente!</h2>
        <p>Tu núnmero de orden es: {orderId}</p>
        </div>
        
        {/* <Link to="/">Volver</Link> */}
      </Title>
      {/* Muestra los detalles de la orden */}
    </div>
  );
};

export default Order;
