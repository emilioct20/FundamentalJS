//Imprimir los numeros del 0 al 10 "<br>"
/*
let i 
for(i=0;i<=10;i++){
    document.write(i)
    document.write("<br>")
}

console.log(i)
*/

/*

const enterprises = ['TESLA','AMAZON','MICROSOFT','META']
console.warn('FOR TRADICIONAL')
for(let i = 0; i<enterprises.length; i++){
    console.log(enterprises[i])
}

console.warn('FOR IN')
for(let i in enterprises){
    console.log(enterprises[i])
}

console.warn('FOR OFF')
for(let enterprises of enterprises){
    console.log(enterprises)
}


*/


/*
let arr = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5', 'Nivel 6']
for(let i=0; i< 6; i++ ){
    document.writeln(arr[i])
    document.writeln("<br>")
}
*/

let arr = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5', 'Nivel 6']
for(let i=1; i<= 6; i++ ){
    
    document.writeln('<h'+ [i] +'>'+'Encabezado de:'+ arr[i-1] + '</h'+[i]+'>')
}