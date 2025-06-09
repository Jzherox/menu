function tabla_de_multiplicar() {
    limpiar_consola()
    let multiplier = parseInt(document.getElementById('multiplicador').value) || 0
    let number = parseInt(document.getElementById('numero').value) || 0

    if (multiplier <= 0) {
        output_console('<strong>Consola: Ingresa un valor para la multiplicacion (mayor a 0).</strong>')
        return
    }
    output_console(`Tabla de multiplicar del ${multiplier} desde el 1 hasta el ${number}`)
    output_console('============================================')
    for (let i = 1; i <= number; i++) {
        let addition = i * multiplier
        output_console(`${i} * ${multiplier} = ${addition}`)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}