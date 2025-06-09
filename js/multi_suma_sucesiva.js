function suma_sucesiva() {
    limpiar_consola()
    const a = parseInt(document.getElementById('varA').value) || 0
    const b = parseInt(document.getElementById('varB').value) || 0
    
    output_console("<strong>============================================</strong>")
    output_console(`<strong>Multiplicando ${a} × ${b} por sumas sucesivas:</strong>`)
    output_console("<strong>============================================</strong>")
    
    let suma = 0;

    for (let i = 1; i <= b; i++) {
        suma += a;
        output_console(`Suma ${i}: ${suma} (+ ${a})`)
    }
    
    output_console(`<strong>Resultado: ${a} × ${b} = ${suma}</strong>`)
    output_console(`<strong>Verificación: ${a * b}</strong>`)
    output_console('<strong>Consola: Tarea finalizada.</strong>')
}