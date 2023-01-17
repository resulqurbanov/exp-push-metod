const express = require("express");
const app = express();
const port = 3000;

const arr = [{ id: "1", name: "Resul", surname: "Qurbanov" }];

app.get("/", (req, res) => {
  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
