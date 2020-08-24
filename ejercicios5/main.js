const contarPalabras = (str) => {
    let palabras = str.split(" ")
   
      return palabras.length

}

console.log(contarPalabras('javascript')) // 1
console.log(contarPalabras('ada lovelace')) // 2
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')) // 14