let imagen = document.getElementById("acierto");
let numeroMaximo = parseInt(document.getElementById("usuarioMaximo").value);
let cantidadSorteos = parseInt(document.getElementById("usuarioCantidadSorteos").value);
let cantidadChances = parseInt(document.getElementById("usuarioPosibilidades").value);
let numeroElegido = parseInt(document.getElementById("usuarioChoice").value);

let numeroSorteado = Math.round(Math.random()*numeroMaximo);

function pickRandom(){
    random = Math.round(Math.random()*numeroMaximo);
    return random
}

function tomarValoresUsuario(){
    numeroMaximo = parseInt(document.getElementById("usuarioMaximo").value);
    cantidadSorteos = parseInt(document.getElementById("usuarioCantidadSorteos").value);
    cantidadChances = parseInt(document.getElementById("usuarioPosibilidades").value);
    numeroElegido = parseInt(document.getElementById("usuarioChoice").value);

    numeroSorteado = [];

    let sorteo = 0;
    while(sorteo < cantidadSorteos){
        pickRandom();

        if(random != 0){
            let coincidencia = false;
            
            for(repetidor = 0; repetidor < numeroSorteado.length; repetidor++){
            
                if(random == numeroSorteado[repetidor]){
                    coincidencia = true;
                    break;
                }
            }   
            if(coincidencia == false){
                numeroSorteado.push(random);
                sorteo++;
            }
        }
    }

    document.getElementById("campoEjecucion").removeAttribute("hidden");

    console.log(numeroMaximo);
    console.log(cantidadSorteos);
    console.log(cantidadChances);
    console.log(numeroElegido);
    console.log(numeroSorteado);

    return numeroSorteado
}

function verificarCoincidencia(){

    let acierto = false;

    for(posicion1 = 0; posicion1 < cantidadSorteos; posicion1++){
        
        if(numeroElegido == numeroSorteado[posicion1]){
            alert("Acertaste crack!");
            acierto = true;
            break;
        }
    }
    if(acierto == false){
            alert("Mala suerte, intenta de nuevo!");
        }
}

function sortear() {
    tomarValoresUsuario();
    verificarCoincidencia();

    document.getElementById("usuarioChoice").value = "";
    document.getElementById("usuarioChoice").focus();
}