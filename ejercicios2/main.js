// Crear una función esUltimoCaracter que tome 
// como argumentos una palabra y un caracter y devuelva true si 
// la palabra termina con el caracter o false de lo contrario


 const esUltimoCaracter = (palabra, b) =>{
     if (palabra.slice(7)==b){
         return true
     }
     else {
         return false
     }


 }
 
 console.log(esUltimoCaracter('lovelace', 'e')) // true
 console.log(esUltimoCaracter('lovelace', 'f')) // false
