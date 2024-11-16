import * as Utils from "./utils.js";
import * as Socket from "./socket.js";

window.modules = {
  base: {
    ready: () => {
      Socket.send({ type: "ready" });
      elems.base_ready.disabled = true;
      elems.base_desc.innerText = "Waiting for the game to start...";
    }
  }
}

export function show(data) {
  if (modules[data.name].scan) modules[data.name].scan();

  Utils.show_screen("modules");

  Array.from(elems.modules_screen.children).forEach(child => child.classList.add("hidden"));
  elems[data.name + "_module"].classList.remove("hidden");
}
