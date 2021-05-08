function comprar() {
  let gansito = false;
  let ChocoBar = false;

  if (gansito === true) {
    alert("Toma tu gansito");
  }

  // || = ó / && = y
  if (ChocoBar === true && gansito !== true) {
    alert(" Toma tu barra de chocorramo");
  }

  if (ChocoBar === false || gansito === false) {
    alert("No hay ninguno");
  }
}
