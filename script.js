const container = document.querySelector(".container"),
  qrInput = container.querySelector(".form input"),
  qrCodeArea = container.querySelector(".qr-code"),
  generateBtn = container.querySelector(".form button");

let preValue;
let qrcode;

const makeCode = () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;

  // limpar área do QR Code
  qrCodeArea.innerHTML = "";

  generateBtn.innerText = "Gerando QR Code...";

  // setTimeout foi usado somente para simular uma espera
  setTimeout(() => {
    qrcode = new QRCode(qrCodeArea, {
      text: qrValue,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    generateBtn.innerText = "Gerar QR Code";
  }, 1000);
};

generateBtn.addEventListener("click", () => {
  makeCode();
});

qrInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    makeCode();
  }
});
