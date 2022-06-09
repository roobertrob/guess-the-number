function getNumber() {
    const URL = "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";
    fetch(URL).then((response) => response.json())
        .then((result) => {
            let numeroApi = result.value
            document.querySelector("#valorApi").textContent = numeroApi;
            console.log(result)
        })
        // .catch((err) => {
        //     let informe = document.getElementById("informe");
        //     informe.textContent = err.message;
        //     document.getElementById("reiniciar").classList.remove("invisivel");
        //     let display1 = document.getElementById('display-1');
        //     let display2 = document.getElementById('display-2');
        //     let display3 = document.getElementById('display-3');
        //     let baseClass = 'display-container display-size-12 display-no-';
        //     display1.className = (baseClass + 5);
        //     display2.className = (baseClass + 0);
        //     display3.className = (baseClass + 2);
        // })
}
getNumber();

