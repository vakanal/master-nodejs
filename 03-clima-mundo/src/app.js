const { argv } = require("./config");
const { getInfo } = require("./api");

getInfo(argv.direccion)
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err));
