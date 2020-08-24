// Crear una función removerVocales que tome como
// argumento un string str y devuelva un string con
// todas sus vocales removidas



const removerVocales =(str) => {
    let remover =str.replace(/[aeiou]/g, "")
    return remover
}

console.log(removerVocales('javascript')) // 'jvscrpt'
console.log(removerVocales('ada lovelace')) // 'd lvlc'