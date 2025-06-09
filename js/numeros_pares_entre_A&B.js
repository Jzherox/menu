function numeros_pares_entre_AB() {
    limpiar_consola()
    let A = parseInt(document.getElementById('varA').value) || 0
    let B = parseInt(document.getElementById('varB').value) || 0

    if (B <= A) {
        output_console(`<strong>Consola: Ingresa un valor final mayor que ${A}.</strong>`)
        return
    }
    for (let i = (A+1); i < B; i++) {
        if (i % 2 == 0) {
            output_console(i)
        }
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}