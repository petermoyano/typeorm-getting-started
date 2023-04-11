import { Photo } from "./entity/Photo";
import { AppDataSource } from "./data-source";

const express = require("express");
const app = express();
const port = 3000;

app.get("/addPhoto/:name", async (req, res) => {
  const photo = new Photo();
  photo.name = req.params.name;
  photo.id = 1;
  photo.description = "My name is " + req.params.name;
  await AppDataSource.manager.save(photo);
  res.send("Inserted a new photo into the database...");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
