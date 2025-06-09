function divisores() {
    limpiar_consola()
    const number = parseInt(document.getElementById('numero').value) || 0
    let divisores = []
    
    output_console("<strong>============================================</strong>")
    output_console(`<strong>Mostrando los divisores de ${number}:</strong>`)
    output_console("<strong>============================================</strong>")

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisores.push(i)
            output_console(`${i}\n`)
        }
    }

    output_console(`<strong>Total de divisores: ${divisores.length}</strong>`)
    output_console(`<strong>Divisores: ${divisores.join(', ')}</strong>`)
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}