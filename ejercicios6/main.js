

//  Crear una función burlarse que tome
//   como argumento un string str y devuelva
//    el mismo string con todas las vocales 
//    reemplazadas por la letra i



    const burlarse = (string) =>{
        let burla = string.replace(/[aeou]/g, "i")
        return burla 
    }

    console.log(burlarse('programar es dificil'))