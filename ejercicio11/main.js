// Crear una función ocultarContraseña que tome
//  como argumento una contrasenia de solo numeros
//   y devuelva un string con dicha contraseña ocultada
//    con astericos *, es decir, un string con 
// la misma longitud donde todos sus caracteres son astericos


const ocultarContrasenia = (contrasenia) =>{
    let cambio = contrasenia.replace(/[123456789]/g, " * ")
       return cambio
}
console.log(ocultarContrasenia(`123456`)) // '******'
console.log(ocultarContrasenia(`111222333`)) // '*********'
