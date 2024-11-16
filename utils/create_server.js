var global = require("./global.js");
const fs = require("fs");
const http = require("http");
const https = require("https");
const WebSocketServer = require("websocket").server;
var prompt = require('prompt-sync')();
const serveStatic = require("serve-static");
const finalhandler = require("finalhandler");
const ip = require("ip");
const path = require("path");

for (var key in global.config) {
  var val = prompt(`${key} [${global.config[key]}]: `);
  if (val == "") continue;

  if (typeof(global.config[key]) == "number") val = parseInt(val);
  if (typeof(global.config[key]) == "boolean") val = (val === "true");

  global.config[key] = val;
}

require("./create_modules.js");

if (global.config.https) var options = { cert: fs.readFileSync("secrets/fullchain.pem"), key: fs.readFileSync("secrets/privkey.pem") };

const staticHandler = serveStatic("./frontend");
function handleHTTP(req, res) {
  staticHandler(req, res, finalhandler(req, res));
}

const httpServer = (global.config.https) ? https.createServer(options, handleHTTP) : http.createServer(handleHTTP);
const server = new WebSocketServer({ httpServer: httpServer });

module.exports = { server, httpServer };
