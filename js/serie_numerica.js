function serie_numerica() {
    limpiar_consola()
    let number = parseInt(document.getElementById('numero').value)
    if (number <= 1) {
        output_console('<strong>Consola: Ingresa un numero (mayor a 1).</strong>')
        return
    }
    for (let i = 1; i <= number; i++) {
        output_console(i)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}