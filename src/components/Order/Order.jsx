import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Title from '../Title section/Title';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import OrderImg from '../../../img/Persons/pay2.svg'
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
    return <LoadingSpinner />;
  }
  

  return (
    <>
      <Title title="Tu compra" link="Ayuda" linkdir='/help'>
        <div className='title_contain' style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <h2 style={{fontSize:'2rem'}}>Tu compra se registró exitosamente!</h2>
        <p>Tu núnmero de orden es: {orderId}</p>
        <img src={OrderImg} alt="" className='empty' style={{width:'400px'}}/>
        </div>
        
        </Title>
    </>
  );
};

export default Order;
