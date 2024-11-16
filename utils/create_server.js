var global = require("./global.js");
const WebServer = require("http-server");
const http = require("http");
const WebSocketServer = require("websocket").server;
var prompt = require('prompt-sync')();

for (var key in global.config) {
  var val = prompt(`${key} [${global.config[key]}]: `);
  if (val == "") continue;

  if (typeof(global.config[key]) == "number") val = parseInt(val);
  global.config[key] = val;
}

require("./create_modules.js");

const webServer = WebServer.createServer({ root: "./frontend" });
webServer.listen(global.config.port);

const wsHttpServer = http.createServer();
const server = new WebSocketServer({ httpServer: wsHttpServer });

module.exports = { server, wsHttpServer };