const colors = require("colors/safe");
const { argv } = require("./config");
const { crear, getListado, actualizar, borrar } = require("./to-do");

switch (argv._[0]) {
  case "crear":
    let tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let listado = getListado();
    for (const tarea of listado) {
      console.log(colors.green("======= Por Hacer ======="));
      console.log(tarea.descripcion);
      console.log("Estado: ", tarea.completado);
      console.log(colors.green("========================="));
    }
    break;
  case "actualizar":
    let actualizado = actualizar(argv.descripcion, argv.completado);
    if (actualizado) console.log("Actualizado");
    else console.log("Sin Actualizar");
    break;
  case "borrar":
    let borrado = borrar(argv.descripcion);
    if (borrado) console.log("Borrado");
    else console.log("No se pudo borrar");
    break;
  default:
    console.log("Comando Incorrecto");
}
