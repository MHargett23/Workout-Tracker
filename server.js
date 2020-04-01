const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./controllers/htmlroutes.js")(app);
require("./controllers/apiroutes.js")(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: " + ${PORT}`);
  });