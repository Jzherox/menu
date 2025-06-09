function numeros_pares() {
    limpiar_consola()
    let number = parseInt(document.getElementById('numero').value) || 0
    
    if (number <= 0) {
        output_console('<strong>Consola: Ingresa un numero (mayor a 0).</strong>')
        return
    }

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Mostrando numeros pares del 1 al ${number}:</strong>`)
    output_console("<strong>============================================</strong>")

    for (let i = 2; i <= number; i++) {
        if (i % 2 == 0) {
             output_console(i)
        }
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}