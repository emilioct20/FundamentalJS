let invoice = {
    number: 1,
    client: "LIVINGLAB",
    currency: "USD",
    coords: {
        lat: 42.0,
        long: -168.61
    },
    services: ["LAPTOPS", "COFFE", "GAS", "INTERNET"],
    location:{cp: 31100, aldress: "Av. Americas"},
    subtotal: 500,
    IVA: 80 
}
document.writeln(invoice.client)
document.writeln("<br>")
document.writeln(invoice["client"])
document.writeln("<br>")
document.writeln(invoice.coords.lat)
document.writeln("<br>")
document.writeln(invoice.services[1])
document.writeln("<br>")
document.writeln(invoice.services)

//
delete invoice.IVA
invoice.info = "hola"