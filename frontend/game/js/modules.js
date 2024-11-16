import * as Utils from "./utils.js";

var modules = {
  base: {
    scan: (data) => {
      
    }
  }
}

export function show(data) {
  Utils.show_screen("modules");

  Array.from(elems.modules_screen.children).forEach(child => child.classList.add("hidden"));
  elems[data.name].classList.remove("hidden");
}
