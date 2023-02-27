//Lista con datos personales
const datosPersonales = {
    nombre: 'Arturo Valencia Zarate',
    edad: 30,
    eresDesarrollador: true,
    fechaNacimiento: new Date(1992, 10, 23),
    libroFavorito: {
        titulo: 'Tiende tu cama',
        autor: 'William H. McRaven',
        fecha: new Date(2017, 03, 04),
        url: 'https://bit.ly/tiendetucamaazn'
    },
}

console.log(datosPersonales.libroFavorito);