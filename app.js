const express = require("express");
const db = require("./db/conn")
const Student = require("./models/students")
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

// Create a new Students
app.post("/student", (req, res) => {
    console.log(req.boby)
    
    const user = new Student(req.body)
    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((err) => {
       res.status(400).send(err);
    })
})

app.listen(port, () => {
    console.log(`Listening on the server ${port}`);
})