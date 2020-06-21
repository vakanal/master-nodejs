const axios = require("axios");
const { argv } = require("./config");

const instance = axios.create({
  baseURL: "https://community-open-weather-map.p.rapidapi.com",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "a024f34a06msh43801dfe674ea2cp17ebe5jsn440714d7cf79",
    useQueryString: true,
    accept: "application/json",
  },
});

const query = encodeURI(argv.direccion);

instance
  .get("/weather", {
    params: {
      q: query,
    },
  })
  .then((resp) => console.log(resp.data))
  .catch((err) => console.log(err));
