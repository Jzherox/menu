function numero_primo() {
    limpiar_consola()
    const number = parseInt(document.getElementById('numero').value) || 0

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Verificando si ${number} es primo...</strong>`)
    output_console("<strong>============================================</strong>")

    if (number < 2) {
        output_console(`${number} no es primo (debe ser ≥ 2)`)
    } else {
        let esPrimo = true;
        let divisoresEncontrados = [];

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                esPrimo = false;
                divisoresEncontrados.push(i);
                output_console(`Divisor encontrado: ${i}`)
            } else {
                output_console(`${i} no divide a ${number}`)
            }
        }
        
        if (esPrimo) {
            output_console(`<strong>${number} Es un número primo!</strong>`)
            output_console(`<strong>No se encontraron divisores</strong>`)
        } else {
            output_console(`<strong>${number} No es primo</strong>`)
            output_console(`<strong>Divisores: ${divisoresEncontrados.join(', ')}</strong>`)
        }
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}