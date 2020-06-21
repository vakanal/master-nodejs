const colors = require("colors/safe");
const { argv } = require("./config");
const { crearArchivo, listarTabla } = require("./multiplicar");

switch (argv._[0]) {
  case "crear":
    console.log("Crear");
    crearArchivo(argv.base, argv.limite)
      .then((resp) => console.log(colors.blue(resp)))
      .catch((err) => console.error(colors.red(err)));
    break;
  case "listar":
    console.log("Listar");
    listarTabla(argv.base, argv.limite);
    break;
  default:
    console.log("Comando incorrecto");
}
