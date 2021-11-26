
let botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    var palpite = document.getElementById("palpite"); //valor digitado pelo user
    var valorPalpite = obtemValorInput(palpite);
    var informe = document.getElementById("informe"); //avisa se é menor, maior ou igual
    var response = document.getElementById("valorApi"); //valor obtido da api
    

    if (valorPalpite > response) {
        numero.textContent = valorPalpite;
        informe.textContent  = "É menor";
        console.log("é menor");
        return;
    }

    else if (valorPalpite < (response)) {
        numero.textContent = valorPalpite;
        informe.textContent  = "É maior";
        console.log("é maior");
        return;
    }
    else if (valorPalpite == response) {   
        numero.textContent = valorPalpite;
        informe.textContent  = "Você ganhou";
        return;
    }
    else if (!validaNumero(valorPalpite)) { 
        console.log("numero invalido");
        informe.textContent  = "Numero Inválido";
        return;
    }

})


    
    


function validaNumero(valorPalpite) {
    if (valorPalpite <= 300 && valorPalpite > 0) {
        return true;
    } else {
        return false;
    }
}

function obtemValorInput(palpite) {
    var input = palpite.value
    return input;
}

