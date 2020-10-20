"use strict";

const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname + '/html'));
app.listen(PORT, () => {
  console.log(`Server is up and running: http://localhost:${PORT}`);
});
