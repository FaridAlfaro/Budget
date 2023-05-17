import ITEMS_DATA from "../Data/itemData"

const pedirDatos = (bool) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(ITEMS_DATA)
        }, 2000)
    })
}
export default pedirDatos