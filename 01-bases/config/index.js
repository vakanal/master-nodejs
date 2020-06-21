const options = {
  base: {
    alias: "b",
    demand: true,
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", options)
  .command("crear", "Crea un archivo con la tabla de multiplicar", options)
  .help().argv;

module.exports = { argv };
