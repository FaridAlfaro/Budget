import ITEMS_DATA from "../Data/ITEMS_DATA"

const pedirDatos = (bool) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(ITEMS_DATA)
        }, 2000)
    })
}
export default pedirDatos