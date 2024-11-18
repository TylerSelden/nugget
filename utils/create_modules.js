var global = require("./global.js");

class Module {
  constructor(friendly, type, notes, desc, scan, end) {
    this.friendly = friendly;
    this.type = type;
    this.notes = notes;
    this.desc = desc;
    if (this.type == "active") this.active = false;
    this.scan = scan;
    this.end = end;
    this.id = -1;
    if (type == "base") this.id = 0;
  }
}

global.modules = {
  base: new Module(
    "Base",
    "base",
    "None",
    "View active tasks and their locations",
    () => {
      if (!global.game.started) return null;

      return Object.values(global.modules).sort((a, b) => a.id - b.id);
    }
  ),
  cocoa: new Module(
    "Make hot cocoa",
    "active",
    "None",
    "Make hot cocoa to keep morale up",
    () => {

    }
  ),
  log1: new Module(
    "Data log #1",
    "passive",
    "None",
    "Read important ship data",
    () => {

    }
  )
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
