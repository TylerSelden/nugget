var ip = require("ip");

var global = require("./utils/global.js");
const { server, httpServer } = require("./utils/create_server.js");
const server_main = require("./utils/server_main.js");

server.on("request", server_main);
httpServer.listen(global.config.port);

console.log(`${global.config.name} is ready for boarding!
  
  Go to http${global.config.https ? 's' : ''}://${ip.address()}:${global.config.port} on your devices!

  Address: ${ip.address()}
  Port: ${global.config.port}`);
