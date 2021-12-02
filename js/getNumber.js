let getNumber = addEventListener("load", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300");
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            let resposta = xhr.responseText;
            let numero = JSON.parse(resposta);
            numeroApi = numero.value
            console.log(numeroApi)
            let span = document.querySelector("#valorApi");
            span.textContent = numeroApi;



        } else if (xhr.status == 502) {
            let informe = document.getElementById("informe");
            informe.textContent = "ERRO";           
            document.getElementById("reiniciar").classList.remove("invisivel");
            disabled();

            let display1 = document.getElementById('display-1');
            let display2 = document.getElementById('display-2');
            let display3 = document.getElementById('display-3');
            let baseClass = 'display-container display-size-12 display-no-';
            display1.className = (baseClass + 5);
            display2.className = (baseClass + 0);
            display3.className = (baseClass + 2);

        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();

});


