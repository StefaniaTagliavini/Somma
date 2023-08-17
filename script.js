function somma() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").value = result;
  return result;
}
