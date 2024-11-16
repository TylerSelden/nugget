const { type } = require("os");
var global = require("./global.js");

global.modules = {
  base: {
    type: "base",
    start: function() {
      
    },
    id: 0
  },
  hot_cocoa: {
    type: "active",
    active: false,
    start: function() {
      
    },
    end: function() {
      this.active = false;
    },
    id: -1
  },
  log: {
    type: "passive",
    start: function() {
      
    },
    id: -1
  }
}

var ids = Array.from({length: Object.keys(global.modules).length - 1}, (_, i) => i + 1);
for (var key in global.modules) {
  if (key !== "base") {
    global.modules[key].id = ids.splice(Math.floor(Math.random() * ids.length), 1)[0];
  }
}