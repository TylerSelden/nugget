var global = require("./global.js");

global.modules = {
  base: {
    type: "base",
    scan: () => {
      return this;
    },
    id: 0
  },
  hot_cocoa: {
    type: "active",
    active: false,
    scan: () => {
      return this;
    },
    end: () => {
      this.active = false;
    },
    id: -1
  },
  log: {
    type: "passive",
    scan: () => {
      return this;
    },
    id: -1
  }
}
global.ids = { 0: global.modules.base };

var ids = Array.from({length: Object.keys(global.modules).length - 1}, (_, i) => i + 1);
for (var key in global.modules) {
  global.modules[key].name = key;

  if (key !== "base") {
    var id = ids.splice(Math.floor(Math.random() * ids.length), 1)[0];
    global.modules[key].id = id;
    global.ids[id] = global.modules[key];
  }
}
