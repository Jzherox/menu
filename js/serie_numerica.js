function serie_numerica() {
    limpiar_consola()
    let number = parseInt(document.getElementById('numero').value)
    if (number <= 1) {
        output_console('<strong>Consola: Ingresa un numero (mayor a 1).</strong>')
        return
    }

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Mostrando numeros del 1 al ${number}:</strong>`)
    output_console("<strong>============================================</strong>")

    for (let i = 1; i <= number; i++) {
        output_console(i)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}