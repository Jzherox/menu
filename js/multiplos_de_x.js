function numeros_multiplos_de_x() {
    limpiar_consola()
    let multiple = parseInt(document.getElementById('Multiplo').value) || 0
    let number = parseInt(document.getElementById('numero').value) || 0

    if (multiple <= 0) {
        output_console('<strong>Consola: Ingresa un multiplo (mayor a 0).</strong>')
        return
    }
    if (number <= multiple) {
        output_console(`<strong>Consola: Ingresa un limite (mayor a ${multiple}).</strong>`)
        return
    }
    for (let i = multiple; i <= number; i++) {
        if (i % multiple == 0) {
            output_console(i)
        }
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}