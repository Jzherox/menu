function repetir_nombre() {
    limpiar_consola()
    let name = document.getElementById('nombre').value || ''
    let times = parseInt(document.getElementById('veces').value)

    if (name === '') {
        output_console('<strong>Consola: Debes ingresar un nombre.</strong>')
        return
    }

    output_console("<strong>============================================</strong>")
    if (times === 1) {
        output_console(`<strong>Mostrando "${name}", ${times} vez:</strong>`)
    } else {
        output_console(`<strong>Mostrando "${name}", ${times} veces:</strong>`)
    }
    output_console("<strong>============================================</strong>")
    
    for (let i = 1; i <= times; i++) {
        output_console(`${i}. ${name}`)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}