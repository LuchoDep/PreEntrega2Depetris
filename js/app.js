// constructores, funciones y arrays

class Alcohol {
    constructor(id, marca, medida, precio) {
        this.id = id;
        this.marca = marca;
        this.medida = medida;
        this.precio = precio
    }
}

class SinAlcohol {
    constructor(id, marca, medida, precio) {
        this.id = id;
        this.marca = marca;
        this.medida = medida;
        this.precio = precio
    }
}

const alcohol = []
const sinAlcohol = []

alcohol.push(new Alcohol(1, "Fernet Branca", "750cc", 2000))
alcohol.push(new Alcohol(2, "Gancia Americano", "950ml", 900))
alcohol.push(new Alcohol(3, "Vodka Smirnoff", "700ml", 1400))
alcohol.push(new Alcohol(4, "Absolut Vodka", "700ml", 4500))
alcohol.push(new Alcohol(5, "Cerveza Brahma - Lata", "473ml", 220))
alcohol.push(new Alcohol(6, "Cerveza Stella Artois - Lata", "473ml", 360))


sinAlcohol.push(new SinAlcohol(1, "Pepsi", "2.55l", 430))
sinAlcohol.push(new SinAlcohol(2, "Coca Cola", "2.25l", 550))
sinAlcohol.push(new SinAlcohol(3, "Seven Up", "2.25l", 400))
sinAlcohol.push(new SinAlcohol(4, "Mirinda", "2.25l", 350))
sinAlcohol.push(new SinAlcohol(5, "Jugo Baggio - Durazno", "1l", 240))


const buscarProd = (array, busqueda) => { return array.find(producto => producto.marca === busqueda) }
const sumarProd = (n1, n2) => { return resultado = n1 + n2 }
const descuentoEfectivo = (n1) => { return resultado = n1 - (n1 * 0.1) }
const cantCuotas = (n1, n2) => { return resultado = n1 / n2 }


alert("Hola! Bienvenido a Maxikiosco Nombre Pendiente, esta semana con la compra de dos productos tenes envío gratis!")


alcohol.forEach(element => {
    alert(`Primero elegí una bebida alcoholica \n ID: ${element.id} - ${element.marca}, de ${element.medida}, precio $${element.precio} `)
});

let bebidaAlcoholica = prompt("Indica el ID de la bebida que queres.")
let compraAlcohol
let marcaAlcohol

switch (bebidaAlcoholica) {
    case "1":
        let compra = alcohol[0]
        marcaAlcohol = compra.marca
        compraAlcohol = compra.precio
        break;

    case "2":
        let compra2 = alcohol[1]
        marcaAlcohol = compra2.marca
        compraAlcohol = compra2.precio
        break;

    case "3":
        let compra3 = alcohol[2]
        marcaAlcohol = compra3.marca
        compraAlcohol = compra3.precio
        break;

    case "4":
        let compra4 = alcohol[3]
        marcaAlcohol = compra4.marca
        compraAlcohol = compra4.precio
        break;

    case "5":
        let compra5 = alcohol[4]
        marcaAlcohol = compra5.marca
        compraAlcohol = compra5.precio
        break;

    case "6":
        let compra6 = alcohol[5]
        marcaAlcohol = compra6.marca
        compraAlcohol = compra6.precio
        break;

    default:
        break;
}

console.log(compraAlcohol)



sinAlcohol.forEach (element => {
    alert(`Ahora elegí una bebida sin alcohol \n ID: ${element.id} - ${element.marca}, de ${element.medida}, precio $${element.precio} `)
})

let bebidaSinAlcohol = prompt("Indica el ID de la bebida que queres")
let compraSinAlcohol
let marcaSinAlcohol

switch (bebidaSinAlcohol){
    case "1":
        let compra = sinAlcohol[0]
        marcaSinAlcohol = compra.marca
        compraSinAlcohol = compra.precio
        break;

    case "2":
        let compra2 = sinAlcohol[1]
        marcaSinAlcohol = compra2.marca
        compraSinAlcohol = compra2.precio
        break;

    case "3":
        let compra3 = sinAlcohol[2]
        marcaSinAlcohol = compra3.marca
        compraSinAlcohol = compra3.precio
        break;

    case "4":
        let compra4 = sinAlcohol[3]
        marcaSinAlcohol = compra4.marca
        compraSinAlcohol = compra4.precio
        break;

    case "5":
        let compra5 = sinAlcohol[4]
        marcaSinAlcohol = compra5.marca
        compraSinAlcohol = compra5.precio
        break;

    default:
        break
}

console.log(compraSinAlcohol)



// compra y pagos


let precioTotal = sumarProd(compraAlcohol,compraSinAlcohol)
console.log(precioTotal)

alert(`Elegiste ${marcaAlcohol} y ${marcaSinAlcohol}. El precio total de tu compra es $${precioTotal}`)



let formaDePago = prompt(`Indica como queres pagar: \n En efectivo tenes un 10% de descuento. \n Con tarjeta en 1 o 3 cuotas`).toLowerCase()
let pagoCuotas
let precioFinal


if (formaDePago == "efectivo"){
    precioFinal = descuentoEfectivo(precioTotal)
    alert(`El precio a pagar en efectivo es de $${precioFinal}`)
}else if (formaDePago == "tarjeta") {
    let cuotas = prompt ("¿En cuantas cuotas queres pagar?")

    switch (cuotas) {
        case "1":
            pagoCuotas = cantCuotas(precioTotal, cuotas)
            alert(`El precio a pagar es de ${precioFinal} en ${cuotas} cuota/s de ${pagoCuotas}`)
            console.log(cuotas)
            break;

        case "3":
            pagoCuotas = cantCuotas(precioTotal, cuotas)
            alert(`El precio a pagar es de ${precioFinal} en ${cuotas} cuota/s de ${pagoCuotas}`)
            console.log(cuotas)
            break;

        default:
            break
    }
}

console.log(precioFinal)
console.log(pagoCuotas)


// cliente y envío

class Cliente {
    constructor (nombreApellido, direccion) {
        this.nombre = nombreApellido
        this.direccion = direccion
    }
}

const cliente = []

cliente.push(new Cliente(prompt("Indica tu nombre y Apellido").toUpperCase(), prompt("Indica la dirección de tu domicilio")))

cliente.forEach (element => {
    alert(`¡Muchas gracias por tu compra! \n El pedido a nombre de ${element.nombre}, dirección ${element.direccion} llegará en breve`)
})