function numeros_entre_AB() {
    limpiar_consola()
    let A = parseInt(document.getElementById('varA').value) || 0
    let B = parseInt(document.getElementById('varB').value) || 0

    if (B <= A) {
        output_console(`<strong>Consola: Ingresa un valor final mayor que ${A}.</strong>`)
        return
    }

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Numeros entre el ${A} al ${B}:</strong>`)
    output_console("<strong>============================================</strong>")

    for (let i = (A+1); i < B; i++) {
        output_console(i)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}