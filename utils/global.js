var global = {
  config: {
    https: true,
    port: 3000,
    strikes: 3,
    name: "U.S.S. Enterprise",
  },
  game: {
    started: false,
    strikes: 0
  },
  clients: {}
};

module.exports = global;
