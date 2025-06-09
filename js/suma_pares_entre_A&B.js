function suma_pares_AB() {
    limpiar_consola()
    const A = parseInt(document.getElementById('varA').value) || 0
    const B = parseInt(document.getElementById('varB').value) || 0
    
    output_console(`Sumando pares entre ${A} y ${B}:`)

    let suma = 0
    let contador = 0;

    for (let i = A; i <= B; i++) {
        if (i % 2 === 0) {
            output_console(`${i} (sumando: ${suma} + ${i} = ${suma + i})`)
            suma += i;
            contador++
        }
    }

    output_console(`Suma total: ${suma}`)
    output_console(`Cantidad de pares: ${contador}`)
}