import ITEMS_DATA from '../Data/ITEMS_DATA.json'
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

const productosRef = collection(db, 'products')

const addProductos = async () => {
  try {
    for (const el of ITEMS_DATA) {
      await addDoc(productosRef, el)
    }
    console.log('Documentos agregados correctamente.')
  } catch (error) {
    console.error('Error al agregar documentos:', error)
  }
}

