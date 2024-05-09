const express = require("express");
const db = require("./db/conn")
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

// Async Await Function
app.post("/student", async (req, res) => {
    try {
          const user = new Student(req.body);
          const createUser = await user.save();
          res.status(201).send(createUser);
    } catch (err) {
          res.status(400).send(err);
    }
  });


app.listen(port, () => {
    console.log(`Listening on the server ${port}`);
})