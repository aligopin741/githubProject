import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  if (name && age) {
    res.send({ message: `Hello ${name}! You are ${age} years old.` });
  } else {
    res.status(400).send("Please provide both name and age.");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});