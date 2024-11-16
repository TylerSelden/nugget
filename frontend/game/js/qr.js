import * as Utils from "./utils.js";
import * as Socket from "./socket.js";

const qrScanner = new Html5Qrcode("reader");

export function start() {
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    (data) => { Socket.send({ type: "scan", id: data })}
  ).then(() => {
    elems.main_header.innerText = "Go to Base to start";
  }).catch((err) => {
    Utils.err("Camera access denied", "Camera access is required for this game. Please refresh and allow camera access.");
  });
}

export function stop() {
  qrScanner.stop();
}

//// dev
window.scan = (data) => {
  Socket.send({ type: "scan", id: data });
}
