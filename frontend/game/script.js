import * as Utils from "./js/utils.js";
import * as Socket from "./js/socket.js";
import * as QR from "./js/qr.js";

window.Game = {};
window.elems = {};
window.onload = function() {
  var _elems = document.querySelectorAll("[id]");
  _elems.forEach((elem) => {
    elems[elem.id] = elem;
  });

  var params = new URLSearchParams(window.location.search);

  if (!params.has('addr') || !params.has('port')) return Utils.err('Malformed URL', 'No address or port specified');

  Socket.init(params.get('addr'), params.get('port'), params.get('name'));

  QR.start();

  //// dev
  elems.dev_scan.addEventListener("keyup", (evt) => {
    if (evt.key == "Enter") {
      scan(elems.dev_scan.value);
      elems.dev_scan.value = "";
    }
  });
}

addEventListener("error", (evt) => {
  Utils.err('Something went wrong', evt.message);
});
