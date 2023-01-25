let credito = 10000
let retiro = prompt('Cuanto deseas retirar')

if(credito>= parseInt(retiro)){
    document.write('retiro exitoso     ')
    document.write('su saldo actual es de:  $'+ (credito- parseInt(retiro)))
}else(
    document.write('saldo insuficiente')
)


//Elvis
/*
credito >= retiro ? document.write('es posible retirar') : document.write('no es posible retirar')
*/
