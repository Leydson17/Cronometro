var sec = 00
var min = 00
var hor = 00
var interval

function doisDigit (digit) {
  if (digit <10) {
    return ('0' + digit)
  } else {
      return (digit)
  }
}

function iniciar() {
  tempo()
  interval = setInterval(tempo, 1000)
}

function pausar () {
  clearInterval(interval);
}

function zerar () {
  clearInterval(interval)
  sec = 00
  min = 00
  hor = 00
  document.getElementById('tempo').innerText = '00:00:00';
}



function tempo () {
  sec++
  if (sec == 60) {
    min++
    sec = 00
    if (min == 60) {
      min = 00
      hor++
    }
  }
  document.getElementById('tempo').innerText = doisDigit(hor) + ':' + doisDigit(min) + ':' + doisDigit(sec)
}