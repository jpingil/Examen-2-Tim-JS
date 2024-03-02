function getHora() {
  var horaActual = new Date();
  var horas = horaActual.getHours();
  var minutos = horaActual.getMinutes();
  var segundos = horaActual.getSeconds();

  //Si alguna de estas variables es menor que 10, le ponemos un 0 delante por cuestión estética
  if (horas < 10) {
    horas = "0" + horaActual;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  postMessage(horas + ":" + minutos + ":" + segundos);
}

//Cada segundo se ejecutará el getHora()
setInterval("getHora()", 1000);
