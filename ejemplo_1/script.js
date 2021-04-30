const saludar = (nombre) => {
    alert(`hola ${nombre}`)
}

const procesarEntradaUsuario = (callback) => {
    let nombre = prompt(`name please: `);
    callback(nombre);
}

procesarEntradaUsuario(saludar);