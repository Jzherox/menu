function multiplos_de_3() {
    limpiar_consola()
    let number = parseInt(document.getElementById('numero').value) || 0

    if (number <= 3) {
        output_console('<strong>Consola: Ingresa un limite (mayor a 3).</strong>')
        return
    }

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Mostrando numeros multiplos de 3 del 1 al ${number}:</strong>`)
    output_console("<strong>============================================</strong>")

    for (let i = 3; i <= number; i++) {
        if (i % 3 == 0) {
            output_console(i)
        }
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}