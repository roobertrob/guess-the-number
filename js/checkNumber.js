let numberApi = 0
void async function () {
  numberApi = await getNumber();
  console.log(numberApi);
}();

function checkNumber() {
  let response = numberApi;
  let guess = document.getElementById('guess').value;
  let warning = document.getElementById('warning');
  if (!validateInputEntry(guess)) {
    warning.textContent = 'Numero Inválido';
    warning.classList.add('wrong');
    return limpaForm();
  }

  if (guess > response) {
    warning.textContent = 'É menor';
    warning.classList.remove('wrong');
    return setDisplays(guess);
  } else if (guess < response) {
    warning.textContent = 'É maior';
    warning.classList.remove('wrong');
    return setDisplays(guess);
  } else if (guess == response) {
    warning.textContent = 'Você ganhou!!!';
    warning.classList.add('correct');
    document.getElementById('reiniciar').classList.remove('hidden');
    return setDisplays(guess), disabled();
  }
}

function validateInputEntry(guess) {
  return guess < 301 && guess > 0;
}
function limpaForm() {
  document.getElementById('guess').value = null;
}

function disabled() {
  document.querySelector('#guess').disabled = true;
  document.getElementById('submit').disabled = true;
}

let currentDisplayNo = 0;
let display1 = document.getElementById('display-1');
let display2 = document.getElementById('display-2');
let display3 = document.getElementById('display-3');
function setDisplays(guess) {
  splitGuess = guess.split('');
  let baseClass = 'display-container display-size-12 display-no-';

  if (splitGuess.length == 1) {
    display1.classList.add('hidden');
    display2.classList.add('hidden');
    display3.className = baseClass + splitGuess[0];
  } else if (splitGuess.length == 2) {
    display1.classList.add('hidden');
    display2.className = baseClass + splitGuess[0];
    display3.className = baseClass + splitGuess[1];
  } else if (splitGuess.length == 3) {
    display1.className = baseClass + splitGuess[0];
    display2.className = baseClass + splitGuess[1];
    display3.className = baseClass + splitGuess[2];
  }
  limpaForm();
}
