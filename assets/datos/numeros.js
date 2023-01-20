/*
let number_1 = 20
let number_2 = 30.5
let number_3 = 0.45
let number_4 = -30

let result ;

result = number_1 + number_2
result = number_1 - number_2
result = number_1 * number_2
result = number_1 / number_2

 pi
squr
abs
pow
min
*/


let camisa = prompt("Valor de la camisa");
let pantalon = prompt("Valor del pantalon");
let saco = prompt("Valor del saco");

let precio_total = (parseInt(camisa)+ parseInt(pantalon)+ parseInt(saco))
document.write("  Precio total de los articulos:  $" +precio_total)
let descuento = (precio_total * 0.2)
let subtotal = (parseInt(precio_total)- parseInt(descuento))
document.write("  Subtotal:  $"+ subtotal)
let iva = (parseInt(subtotal) * 0.16)
document.write(" iva "+iva)
let total = (parseInt(subtotal)+ parseInt(iva))
document.write("  Total:  $"+ total)




