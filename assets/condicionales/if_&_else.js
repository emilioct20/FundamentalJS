// if y else 
let score = 7
if(score =7) {
    document.write('aprobado' + score)
} else(
    document.write('reprobado' + score)
    )

document.write('br')

let num = 100
if(num === '100'){
    document.write('ES IGUAL') 
} else(
    document.write('NO ES IGUAL')
    )

//Elvis 

// elses multiples 

let calificacion = parseInt(prompt('Introduzca calificacion'))
if(calificacion>= 7){
    document.write('aprobado')
}else if(7 > calificacion){
    document.write('reprobado')
}else(
    document.write('calificacion invalida')
    )