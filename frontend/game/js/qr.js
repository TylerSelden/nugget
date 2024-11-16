import * as Utils from "./utils.js";

const qrScanner = new Html5Qrcode("reader");

export function startScanner() {
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    (decodedText) => {
      console.log(decodedText);
    }
  ).then(() => {
    elems.main_header.innerText = "Go to Base to start";
  }).catch((err) => {
    Utils.err("Camera access denied", "Camera access is required for this game. Please refresh and allow camera access.");
  });
}
