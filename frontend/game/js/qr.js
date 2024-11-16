import * as Utils from "./utils.js";

const qrScanner = new Html5Qrcode("reader");

export function startScanner() {
  qrScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    onScan
  ).then(() => {
    elems.main_header.innerText = "Go to Base to start";
  }).catch((err) => {
    Utils.err("Camera access denied", "Camera access is required for this game. Please refresh and allow camera access.");
  });
}

function onScan(data) {
  console.log(`Got scan: "${data}"`);

  /*
   *
   * If user is already in a module, return early
   * Ask server if data is a valid module
   * If so, show the module (by ID from server), using additional info from the server (e.g. oxygen levels and such)
   *
   */


}
