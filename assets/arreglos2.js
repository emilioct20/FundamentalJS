let currencies = ["MXN", "USD", "EUR", "CAD"]
console.log(currencies);

let size = currencies.length

let ultima_pocision = currencies[currencies.length-1]

//Crear un nuevo valor en el arreglo 

let new_currency = currencies.push("JPY")
console.log({new_currency, currencies});

let add_init = currencies.unshift("NZD");

let delete_last_pos = currencies.pop()

//Borrar el valor de una pocision especifica
let delete_esp_pos = currencies.splice()


let currency_pos = currencies.indexOf("EUR");
