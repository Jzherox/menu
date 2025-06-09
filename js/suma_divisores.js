function suma_divisores() {
    limpiar_consola()
    const number = parseInt(document.getElementById('numero').value) || 0
    let divisores = []
    let suma = 0;
    
    output_console("<strong>============================================</strong>")
    output_console(`<strong>Mostrando la suma de los divisores de ${number}:</strong>`)
    output_console("<strong>============================================</strong>")

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisores.push(i)
            output_console(`${i} (sumando: ${suma} + ${i} = ${suma + i})`)
            suma += i;
        }
    }

    output_console(`<strong>Divisores: ${divisores.join(' + ')}</strong>`)
    output_console(`<strong>Suma total: ${suma}</strong>`)
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}