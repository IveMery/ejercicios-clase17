

const esPuenteSeguro =(puente) =>{
    

    
    if (puente.includes( " ") ){
        return false
    }
    else{
        return true
    }
  }


console.log(esPuenteSeguro('### ##')) 
console.log(esPuenteSeguro('##### ####')) 
console.log(esPuenteSeguro('########')) 