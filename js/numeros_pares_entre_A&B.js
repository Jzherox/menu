function numeros_pares_entre_AB() {
    limpiar_consola()
    let A = parseInt(document.getElementById('varA').value) || 0
    let B = parseInt(document.getElementById('varB').value) || 0

    if (B <= A) {
        output_console(`<strong>Consola: Ingresa un valor final mayor que ${A}.</strong>`)
        return
    }

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Numeros pares entre el ${A} al ${B}:</strong>`)
    output_console("<strong>============================================</strong>")

    contador = 0

    for (let i = (A+1); i < B; i++) {
        if (i % 2 == 0) {
            output_console(i)
            contador++
        }
    }
    output_console(`<strong>Total de pares: ${contador}</strong>`)
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}