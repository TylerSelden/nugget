import * as Utils from "./utils.js";
import * as Modules from "./modules.js";
import * as QR from "./qr.js";

var socket;

export function init(addr, port, name) {
  socket = new WebSocket(`ws${location.protocol == "https:" ? 's' : ''}://${addr}:${port}/ws`);
  socket.onopen = function() {
    console.log("Socket connected");
  };
  socket.onclose = function() {
    Utils.err("Socket Error", "Connection closed");
  };
  socket.onmessage = function(event) {
    var data = JSON.parse(event.data);
    handle_msg(data);
  };
  socket.onerror = function(event) {
    Utils.err("Socket Error", event);
  }

  socket.onopen = function() {
    send({ type: "join", name: name });
  };
}

export function send(data) {
  socket.send(JSON.stringify(data));
}

function handle_msg(msg) {
  switch (msg.type) {
    case "err":
      Utils.err("Something went wrong", msg.data);
      break;
    case "players":
      if (!Game.players) Utils.show_screen("main");
      Utils.show_players(msg.data);
      break;
    case "scan":
      QR.stop();
      console.log(msg.data);
      Modules.show(msg.data);
      break;
  }
}
