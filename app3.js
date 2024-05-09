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

  // read the data of registered Students
app.get("/student", async (req, res) => {
    try{
      const studentsData = await Student.find();
      res.send(studentsData)
    } catch(err){
        res.send(err)
    }
})

// get the indivisual Student data using id
app.get("/student/:id", async (req, res) => {
    try{
            // const _id = req.params;
            // console.log(req.params)
            // console.log(req.params.id)
            // res.send(req.params)
            // res.send(req.params.id)

            const _id = req.params.id;
          const studentData = await Student.findById(_id)
          console.log(studentData)

          if(!studentData){
            return res.status(404).send()
          } else {
            res.send(studentData)
          }
    } catch(err){
            res.status(500).send(err)
    }
})

// Update the Student by it id
app.patch("/student/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
          new : true // current new update show
      });
      res.send(updateStudents);
    } catch (err) {
      res.status(400).send(err);
    }
  });


app.listen(port, () => {
    console.log(`Listening on the server ${port}`);
})