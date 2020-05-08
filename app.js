const sonrriza = '=)'

function llamada(nombre, saludo) {
    let sujeto = nombre
    let hi = saludo
    return `${sujeto} ${hi}`
}

let despedida = () => {
    console.log("Adios ")
}

module.exports = {
    llamada,
    despedida
}