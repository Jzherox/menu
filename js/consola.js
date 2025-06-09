const console = document.getElementById('output')

function limpiar_consola(){
    console.innerHTML = ''
}

function output_console(menssage) {
    const output = document.createElement('p')
    output.classList.add('output-text')
    output.innerHTML = menssage
    console.appendChild(output)
    console.scrollTop = console.scrollHeight;
}