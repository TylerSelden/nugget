var global = require("./global.js");

function send(conn, type, data) {
  conn.send(JSON.stringify({ type, data }));
}

function send_all(type, data, exclude) {
  for (var key in global.clients) {
    var conn = global.clients[key].conn;
    if (exclude && conn == exclude) return;
    conn.send(JSON.stringify({ type, data }));
  };
}

class Player {
  constructor(conn, name) {
    this.conn = conn;
    this.name = name;
    this.ready = false;
  }
}

function send_players() {
  var players = {};
  for (var key in global.clients) {
    players[key] = global.clients[key].ready;
  }
  send_all("players", players);
}

module.exports = { send, send_all, send_players, Player };