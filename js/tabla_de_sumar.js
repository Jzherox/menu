function tabla_de_sumar() {
    limpiar_consola()
    let increase = parseInt(document.getElementById('incremento').value) || 0
    let number = parseInt(document.getElementById('numero').value) || 0

    if (increase <= 0) {
        output_console('<strong>Consola: Ingresa un incremento para la suma (mayor a 0).</strong>')
        return
    }
    output_console(`Tabla de sumar del ${increase} desde el 1 hasta el ${number}`)
    output_console('============================================')
    for (let i = 1; i <= number; i++) {
        let addition = i + increase
        output_console(`${i} + ${increase} = ${addition}`)
    }
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}