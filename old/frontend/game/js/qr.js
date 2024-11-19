import * as Utils from "./utils.js";
import * as Socket from "./socket.js";

const qrScanner = new Html5Qrcode("reader");

export function start() {
  Utils.show_screen("main");
  if (qrScanner.state) return qrScanner.state = 2;
  qrScanner.state = 2;
  
  //// dev, no camera
  return elems.main_header.innerTExt = "Go to Base to start";
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    (data) => { if (qrScanner.state == 2) Socket.send({ type: "scan", id: data }) }
  ).then(() => {
    elems.main_header.innerText = "Go to Base to start";
  }).catch((err) => {
    Utils.err("Camera access denied", "Camera access is required for this game. Please refresh and allow camera access.");
  });
}

export function stop() {
  qrScanner.state = 1;
}

//// dev
window.scan = (data) => {
  Socket.send({ type: "scan", id: data });
}
