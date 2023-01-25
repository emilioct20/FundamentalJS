// && = Amperson y ||= or

let calificacion = prompt('Introduce tu calificacion')

if(calificacion>=0 && 6>calificacion){
    console.error('Reprobado')
}else if(calificacion>=6 && 8>calificacion){
    console.warn('Aprobado con condicional')
}else if(calificacion>=8 && 10>=calificacion){
    console.log('Aprobado')
}else if(calificacion>10 || 0>calificacion){
    console.log('Calificacion no valida')
}else if(calificacion!=Number){
    console.log('Digito no valido')
}


