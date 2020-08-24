// Crear una función capitalizar que tome como argumento un string str 
// y devuelva el mismo string con la primera letra en mayúscula


const capitalizar =(str) =>{
    
    const primeraLetra = str.charAt(0)
    const primeraEnMayuscula = primeraLetra.toUpperCase()
    const restoDelNOmbre = str.slice(1, str.length)
    const restoEnminus = restoDelNOmbre.toLowerCase()
    const nombreNormalizado = primeraEnMayuscula.concat(restoEnminus)
    return nombreNormalizado

}

console.log(capitalizar(`lovelace`))// 'Lovelace'
console.log(capitalizar('había una vez...')) // 'Había una vez...'
