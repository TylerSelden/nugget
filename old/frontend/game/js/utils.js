export function err(header, msg) {
  elems.err_header.innerText = header;
  elems.err_msg.innerText = msg;
  show_screen("err");
}

export function show_players(players) {
  Game.players = players;
  elems.players.innerHTML = "";

  const keys = Object.keys(Game.players);
  keys.forEach((key, i) => {
    const player = document.createElement("span");
    player.innerText = key;
    if (Game.players[key]) player.classList.add("ready");
    elems.players.appendChild(player);

    if (i < keys.length - 1) {
      const comma = document.createElement("span");
      comma.innerText = ", ";
      if (Game.players[key]) comma.classList.add("ready");
      elems.players.appendChild(comma);
    }
  });
}


export function show_screen(screen) {
  screen += "_screen";
  for (var key in elems) if (key.includes("screen")) elems[key].classList.add("hidden");

  elems[screen].classList.remove("hidden");
  elems[screen].style.display = "block";
}
