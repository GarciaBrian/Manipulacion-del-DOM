window.addEventListener('load', ()=>{
    let body = document.querySelector('body')
    let $main = document.querySelector('main')
    let $h2 = document.querySelector('h2')
    let $a = document.querySelector('a')
    let $p = document.querySelectorAll('p')

    $main.style.display = "block"

    let nombre = prompt('Escriba su numbre')
    console.log(nombre)
    if (nombre === null || nombre.length === 0 ) {
        $h2.innerText += ` Invitado`
    } else {
        $h2.innerText += ` ${nombre}`
    }

    $h2.style.textTransform = "uppercase"

    $a.style.color = "#E51B3E"

    let fondo = confirm('Desea agregar fondo?')

    if (fondo) {
        body.classList.add('fondo')
    } 

    $p.forEach((p, i)=>{
        if (i % 2 === 0) {
            p.classList.add('destacadoPar')
        } else {
            p.classList.add('destacadoImpar')
        }
    })
})