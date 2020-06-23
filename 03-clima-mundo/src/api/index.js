const axios = require("axios");

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

const getLugarLatLng = async (direccion) => {
  try {
    const params = { q: encodeURI(direccion) };
    const { data } = await instance.get("/weather", { params });
    return {
      direccion: data.name,
      lat: data.coord.lat,
      lng: data.coord.lon,
    };
  } catch (err) {
    throw new Error("Error al cargar el lugar", err);
  }
};

const getClima = async (lugar) => {
  try {
    const params = { lat: lugar.lat, lon: lugar.lng };
    const { data } = await instance.get("/weather", { params });
    const temp = data.main.temp - 273.15;
    return temp.toPrecision(4);
  } catch (error) {
    throw new Error("Error al cargar el clima", err);
  }
};

const getInfo = async (direccion) => {
  try {
    const lugar = await getLugarLatLng(direccion);
    const clima = await getClima(lugar);
    return clima;
  } catch (err) {
    throw new Error(err.message, err);
  }
};

module.exports = { getInfo };
