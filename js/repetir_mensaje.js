function repetir_mensaje() {
    limpiar_consola()
    let menssage = document.getElementById('mensaje').value || ''
    let times = parseInt(document.getElementById('veces').value)

    if (menssage == '') {
        output_console('<strong>Consola: Debes ingresar un mensaje.</strong>')
        return
    }
    for (let i = 1; i <= times; i++) {
        output_console(`${i}. ${menssage}`)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}