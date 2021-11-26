
var getNumber = addEventListener("load", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300");
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var numero = JSON.parse(resposta);

            console.log(numero);
            var span = document.querySelector("#valorApi");
            span.textContent = numero.value;
        


        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();

});


