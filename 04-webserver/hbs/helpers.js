const hbs = require("hbs");

hbs.registerHelper("getAnio", () => new Date().getFullYear());

hbs.registerHelper("capitalizer", (text) => {
  let words = text.split(" ");
  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return words.join(" ");
});
