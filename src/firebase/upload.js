import ITEMS_DATA from '../Data/ITEMS_DATA.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'


const productosRef = collection(db, 'products')

ITEMS_DATA.forEach((el) => {
    addDoc(productosRef, el)
})