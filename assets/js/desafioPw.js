function Verificar() {
    const s1 = document.getElementById('select1').value;
    const s2 = document.getElementById('select2').value;
    const s3 = document.getElementById('select3').value;

    const password = s1 + s2 + s3;

    const mensaje = document.getElementById('mensaje');

    if (password === "911") {
      mensaje.textContent = "password 1 correcto";
      mensaje.style.color = "green";
    } else if (password === "714") {
      mensaje.textContent = "password 2 es correcto";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = "password incorrecto";
      mensaje.style.color = "red";
    }
  }