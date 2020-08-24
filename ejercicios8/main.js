// Crear una función capitalizar que tome como argumento un string str 
// y devuelva el mismo string con la primera letra en mayúscula


const capitalizar =(str) =>{

    let palabra = str.replace("l" , "L")
    return palabra
}
console.log(capitalizar(`lovelace`))// Lovelace


