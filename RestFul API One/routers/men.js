const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")


// Handling POST Requrest in REST API
router.post("/mens", async (req,res) => {
    try{
     const addingMensRecords = new MensRanking(req.body)
     console.log(req.body)
        // addingMensRecords.save();
      const insertMens = await  addingMensRecords.save();
    //   res.send(insertMens)
      res.status(201).send(insertMens)

    } catch(e){
        // res.send(e)
        res.status(400).send(e)
    }
})

// Handling GET Requrest in REST API and Sorting
router.get("/mens", async (req,res) => {
    try{
      const getMens = await MensRanking.find({}).sort({"ranking" : 1})
      res.send(getMens)

    } catch(e){
        // res.send(e)
        res.status(400).send(e)
    }
})

// Handling GET Requrest in REST API of Indiviual
router.get("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
      const getMen = await MensRanking.findById({_id})
      res.send(getMen)
    } catch(e){
        // res.send(e)
        res.status(400).send(e)
    }
})

// Handling PATCH Requrest in REST API  of Indiviual
router.patch("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
    //   const getMen = await MensRanking.findByIdAndUpdate(_id, req.body)

      const getMen = await MensRanking.findByIdAndUpdate(_id, req.body ,{
        new : true      // new data show
      })
      res.send(getMen)
    } catch(e){
        // res.send(e)
        res.status(500).send(e)
    }
})

// Handling Delete Requrest in REST API  of Indiviual
router.delete("/mens/:id", async (req,res) => {
    try{
      const getMen = await MensRanking.findByIdAndDelete(req.params.id)
      res.send(getMen)
    } catch(e){
        // res.send(e)
        res.status(500).send(e)
    }
})

module.exports = router;