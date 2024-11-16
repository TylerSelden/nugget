import * as Utils from "./utils.js";

var socket;

export function init(addr, port, name) {
  console.log(`Connecting to ws${location.protocol == "https:" ? 's' : ''}://${addr}:${port}/ws`);
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

function handle_msg(msg) {
  switch (msg.type) {
    case "players":
      if (!Game.players) show_screen("main_screen");
      Utils.show_players(msg.data);
      break;
    case "err":
      Utils.err("Something went wrong", msg.data);
      break;
  }
}
/*
function show_players(players) {
  Game.players = players;
  elems.players.innerHTML = "";
  
  const keys = Object.keys(Game.players);
  keys.forEach((key, i) => {
    const player = document.createElement("span");
    player.innerText = key;
    if (Game.players[key]) player.classList.add("ready");
    elems.players.appendChild(player);
    if (i < keys.length - 1) elems.players.appendChild(document.createTextNode(", "));
  });
}
*/
export function send(data) {
  socket.send(JSON.stringify(data));
}
/*
export function err(header, msg) {
  elems.err_header.innerText = header;
  elems.err_msg.innerText = msg;
  show_screen("err_screen");
}
*/
