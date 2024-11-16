var global = require("./global.js");
const { send, send_players, Player } = require("./misc.js");

function handle_msg(conn, msg) {
  if (!conn.name) return join(conn, msg);

  switch (msg.type) {
    case "start":
      start(conn, msg);
      break;
  }
}

function join(conn, msg) {
  // check if user can join
  if (Object.keys(global.clients).includes(msg.name)) return send(conn, "err", "Name is already taken.");
  if (msg.name.trim() == "") return send(conn, "err", "Name cannot be empty.");
  if (msg.name.length > 12) return send(conn, "err", "Name is too long.");
  if (global.game.started) return send(conn, "err", "Game has already started.");

  // join
  global.clients[msg.name] = new Player(conn, msg.name);
  conn.name = msg.name;

  return send_players();
}

module.exports = { handle_msg };