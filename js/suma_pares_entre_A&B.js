function suma_pares_AB() {
    limpiar_consola()
    const A = parseInt(document.getElementById('varA').value) || 0
    const B = parseInt(document.getElementById('varB').value) || 0
    
    if (A <= 0) {
        output_console('<strong>Consola: Ingresa un numero inicial (mayor a 0).</strong>')
        return
    }
    if (B <= A) {
        output_console(`<strong>Consola: Ingresa un numero final (mayor a ${A}).</strong>`)
        return
    }

    output_console("<strong>============================================</strong>")
    output_console(`<strong>Suma de numeros pares entre el ${A} al ${B}:</strong>`)
    output_console("<strong>============================================</strong>")

    let suma = 0
    let contador = 0;

    for (let i = (A+1); i < B; i++) {
        if (i % 2 === 0) {
            output_console(`${i} (sumando: ${suma} + ${i} = ${suma + i})`)
            suma += i;
            contador++
        }
    }

    output_console(`<strong>Suma total: ${suma}</strong>`)
    output_console(`<strong>Cantidad de pares: ${contador}</strong>`)
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}