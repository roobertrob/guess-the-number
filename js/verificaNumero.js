 function verificaNumero() {

    let palpite = (document.getElementById("palpite").value);
    let informe = document.getElementById("informe");
    let response = (document.getElementById("valorApi").textContent);


    if (!validaNumero(+palpite)) {
        //numero.textContent = palpite;
        setdisplays(palpite);
        informe.textContent = "Numero Inválido";
        limpaForm();
        informe.classList.add("incorreto");
        return;
    }

    if (+palpite > response) {
        //numero.textContent = palpite;
        setdisplays(palpite);
        informe.textContent = "É menor";
        limpaForm();
        informe.classList.remove("incorreto");
        return;
    }

    else if (+palpite < response) {
        //numero.textContent = palpite;
        setdisplays(palpite)
        informe.textContent = "É maior";
        limpaForm();
        informe.classList.remove("vermelho");
        return;
    }

    else if (+palpite == response) {
        //numero.textContent = palpite;
        setdisplays(palpite)
        informe.textContent = "Você ganhou!!!";
        limpaForm();
        informe.classList.add("correto");
        disabled();
        document.getElementById("reiniciar").classList.remove("invisivel");
        
        return;
    }


}
 function validaNumero(palpite) {
    if (palpite <301 && palpite > 0) {
        return true;
    } else {
        return false;
    }
}
 function limpaForm() {
    document.getElementById("palpite").value = null;

}
 function disabled() {
    document.querySelector("#palpite").disabled = true;
    document.getElementById('enviar').disabled = true;

}

let currentdisplayNo = 0;
let display1 = document.getElementById('display-1');
let display2 = document.getElementById('display-2');
let display3 = document.getElementById('display-3');
 function setdisplays(palpite) {

    arrayPal = palpite.split("");
    let baseClass = 'display-container display-size-12 display-no-';

    if (arrayPal.length == 1) {

        display1.classList.add("invisivel");
        display2.classList.add("invisivel");
        display3.className = (baseClass + arrayPal[0]);
        
    }
    else if (arrayPal.length == 2) {
        display1.classList.add("invisivel");
        display2.className = (baseClass + arrayPal[0])
        display3.className = (baseClass + arrayPal[1]);

    }
    else if (arrayPal.length == 3) {
        display1.className = (baseClass + arrayPal[0]);
        display2.className = (baseClass + arrayPal[1]);
        display3.className = (baseClass + arrayPal[2]);

    }
}













