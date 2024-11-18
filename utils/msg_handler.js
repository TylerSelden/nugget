var global = require("./global.js");
const { send, send_players, send_all, Player } = require("./misc.js");

function handle_msg(conn, msg) {
  if (!conn.name) return join(conn, msg);

  switch (msg.type) {
    case "scan":
      handle_scan(conn, msg);
      break;
    case "ready":
      check_ready(conn, msg);
      break;
  }
}

function check_ready(conn, msg) {
  global.clients[conn.name].ready = true;
  //// CHANGE min players to 3
  if (Object.values(global.clients).every(client => client.ready) && Object.keys(global.clients).length > 0 && !global.game.started) return start();
  send_players();
}

function start() {
  global.game.started = true;
  send_players();
  send_all("start");
  console.log("Game started!");
}

function join(conn, msg) {
  // check if user can join
  if (Object.keys(global.clients).includes(msg.name)) return send(conn, "err", "Name is already taken.");
  if (msg.name.trim() == "") return send(conn, "err", "Name cannot be empty.");
  if (msg.name.length > 12) return send(conn, "err", "Name is too long.");
  if (msg.name.length < 3) return send(conn, "err", "Name is too short.");
  if (global.game.started) return send(conn, "err", "The game has already started.");

  // join
  global.clients[msg.name] = new Player(conn, msg.name);
  conn.name = msg.name;

  send(conn, "init", { name: global.config.name })

  return send_players();
}

function handle_scan(conn, msg) {
  if (!global.ids[msg.id]) return;
  
  var module = global.ids[msg.id];

  send(conn, "scan", {
    name: module.name,
    type: module.type,
    data: module.scan()
  });
}


module.exports = { handle_msg };
