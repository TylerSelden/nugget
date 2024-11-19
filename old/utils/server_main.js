var global = require("./global.js");
const { handle_msg } = require("./msg_handler.js");
const { send, send_players } = require("./misc.js");

function server_main(req) {
  if (req.resourceURL.pathname !== "/ws") return req.reject();

  var conn = req.accept(null, req.origin);

  conn.on("message", (msg) => {
    msg = msg.utf8Data;

    try {
      msg = JSON.parse(msg);
      handle_msg(conn, msg);
    } catch (err) {
      send(conn, "err", err.message);
    }
  });

  conn.on("close", () => {
    delete global.clients[conn.name];
    send_players()
  });
}

module.exports = server_main;
