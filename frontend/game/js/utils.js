export function err(header, msg) {
  elems.err_header.innerText = header;
  elems.err_msg.innerText = msg;
  show_screen("err_screen");
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
    if (i < keys.length - 1) elems.players.appendChild(document.createTextNode(", "));
  });
}
