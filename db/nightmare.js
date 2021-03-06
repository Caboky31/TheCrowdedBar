var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://localhost:8080")
  .type("#search_form_input_homepage", "github nightmare")
  .click("#search_button_homepage")
  .wait("#links a")
  .evaluate(function () {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error("Search failed:", error);
  });
