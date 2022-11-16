const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Estamos escuchando en el puerto 3000");
});

//GET
app.get("/", (req, res) => {
  let mensaje = {
    id: 1,
    mensaje: "hola mundo",
  };
  res.send("hola mundo");
});

//POST
app.post("/", (req, res) => {
  res.send("recibi un post");
});


//PUT
app.put("/", (req, res) => {
    res.send("recibi un put");
  });


//PATCH

app.patch("/", (req, res) => {
    res.send("recibi un patch");
  });

//DELETE

app.delete("/", (req, res) => {
    res.send("recibi un delete");
  });