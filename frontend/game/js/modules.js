import * as Utils from "./utils.js";
import * as Socket from "./socket.js";
import * as QR from "./qr.js";

window.modules = {
  base: {
    scan: (data) => {
      if (data == null) return;
      elems.base_list.classList.remove("hidden");
      elems.base_ready.innerText = "Back";
      elems.base_ready.disabled = false;
      elems.base_desc.innerText = "Complete tasks to keep the submarine running!";

      elems.base_dir.innerHTML = "";
      elems.base_tasks.innerHTML = "";
      data.forEach((task) => {
        elems.base_dir.innerHTML += `<tr>
  <td>${task.id}</td>
  <td>${task.friendly}</td>
  <td>${task.desc}</td>
</tr>`;
        if (!task.active) return;
        elems.base_tasks.innerHTML += `<tr>
  <td>${task.id}</td>
  <td>${task.friendly}</td>
  <td>${task.notes}</td>
</tr>`;
      });
    },
    ready: () => {
      if (Game.started) return QR.start();
      Socket.send({ type: "ready" });
      elems.base_ready.disabled = true;
      elems.main_header.innerText = "Waiting for the game to start...";
      Utils.show_screen("main");
    }
  },
  cocoa: {
    scan: (data) => {
      alert(":)");
    }
  }
}

export function show(msg) {
  if (modules[msg.name].scan) modules[msg.name].scan(msg.data);

  Utils.show_screen("modules");

  Array.from(elems.modules_screen.children).forEach(child => child.classList.add("hidden"));
  elems[msg.name + "_module"].classList.remove("hidden");
}
