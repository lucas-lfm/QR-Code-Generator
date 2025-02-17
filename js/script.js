const container = document.querySelector(".container"),
  qrInput = container.querySelector(".form input"),
  qrCodeArea = container.querySelector(".qr-code"),
  generateBtn = container.querySelector(".form button"),
  downloadBtn = document.createElement("button");

let preValue;
let qrcode;

const iconDownload = document.createElement("i");
iconDownload.classList.add("bi");
iconDownload.classList.add('bi-download');

const textDownload = document.createElement("span");
textDownload.innerText = "Baixar QR Code";

downloadBtn.appendChild(iconDownload);
downloadBtn.appendChild(textDownload);

downloadBtn.classList.add("downloadBtn", "display-none");

container.appendChild(downloadBtn);

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
      width: 512,
      height: 512,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    generateBtn.innerText = "Gerar QR Code";
    downloadBtn.classList.remove("display-none");
  }, 1000);
};

const downloadQRCode = () => {
  const qrCanvas = qrCodeArea.querySelector("canvas");
  if (qrCanvas) {
    const qrDataUrl = qrCanvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = "qrcode.png";
    link.click();
  }
};

generateBtn.addEventListener("click", makeCode);

qrInput.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    makeCode();
  }
});

downloadBtn.addEventListener("click", downloadQRCode);
