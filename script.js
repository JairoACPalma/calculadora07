function calcular() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operacion = document.getElementById('operacion').value;
  var resultado;

  if (operacion === "+") {
    resultado = num1 + num2;
  } else if (operacion === "-") {
    resultado = num1 - num2;
  } else if (operacion === "*") {
    resultado = num1 * num2;
  } else if (operacion === "/") {
    resultado = num1 / num2;
  } else {
    alert("Operación no válida");
    return; // Termina la función si la operación no es válida
  }

  document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}
