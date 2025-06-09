function numero_perfecto() {
    limpiar_consola()
    const number = parseInt(document.getElementById('numero').value) || 0

    if (number <= 1) {
        output_console('<strong>Consola: Ingresa un numero (mayor a 1).</strong>')
        return
    }
    
    output_console("<strong>============================================</strong>")
    output_console(`<strong>Verificando si ${number} es perfecto...</strong>`)
    output_console("<strong>============================================</strong>")
    
    let suma = 0;
    let divisores = [];
    
    for (i = 1; i < number; i++) {
        if (number % i === 0) {
            divisores.push(i);
            output_console(`${i} (divisor propio)`)
            suma += i;
        }
    }
    
    output_console(`<strong>Divisores propios: ${divisores.join(' + ')}</strong>`)
    output_console(`<strong>Suma: ${suma}</strong>`)
    
    if (suma === number) {
        output_console(`<strong>${number} Es un número perfecto!</strong>`)
    } else {
        output_console(`<strong>${number} No es un número perfecto!</strong>`)
    }

    output_console('<strong>Consola: Tarea finalizada.</strong>')
}