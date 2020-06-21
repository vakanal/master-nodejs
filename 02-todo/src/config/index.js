const descripcion = {
  alias: "d",
  demand: true,
  desc: "Descripción de la tarea por hacer",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completado o pendiente la area",
};

const argv = require("yargs")
  .command("crear", "Crear un elemento por hacer", { descripcion })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado,
  })
  .command("borrar", "Borra una tarea", { descripcion })
  .help().argv;

module.exports = { argv };
