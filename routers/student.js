const express = require("express")
const router = new express.Router();
const Student = require('../models/students')


// Async Await Function
router.post("/student", async (req, res) => {
    try {
          const user = new Student(req.body);
          const createUser = await user.save();
          res.status(201).send(createUser);
    } catch (err) {
          res.status(400).send(err);
    }
  });

  // read the data of registered Students
  router.get("/student", async (req, res) => {
    try{
      const studentsData = await Student.find();
      res.send(studentsData)
    } catch(err){
        res.send(err)
    }
})

// get the indivisual Student data using id
router.get("/student/:id", async (req, res) => {
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
router.patch("/student/:id", async (req, res) => {
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


  // Detele the students by it id
  router.delete("/student/:id", async (req, res) =>{

    try{
        // const id = req.params.id;
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
if(!req.params.id){
    return res.status(400).send()
} 
res.send(deleteStudent)
    } catch(e){
        res.status(500).send(e)
    }

})
module.exports = router;