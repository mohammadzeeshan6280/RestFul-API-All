const express = require("express");
const app = express();
const db = require("./db/conn");
const MensRanking = require("./models/mens");
const port = process.env.PORT || 3000;

app.use(express.json())

// We Will Handle Post Req
app.post("/mens", async (req, res) => {
  try {
    const addingMensRecord = new MensRanking(req.body);
    console.log(req.body)
   const insertMens = await addingMensRecord.save();
   res.status(201).send(insertMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

// We Will Handle Get Req
app.get("/mens", async (req, res) => {
  try {
    // const getMens = await MensRanking.find({});
    const getMens = await MensRanking.find({}).sort({"ranking" : 1});
   res.send(getMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

// We Will Handle Get Req one by one
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
   res.send(getMen);
  } catch (err) {
    res.status(400).send(err);
  }
});

// We Will Handle Patch Req 
app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
        new : true
    });
    
   res.send(getMen);
  } catch (err) {
    res.status(500).send(err);
  }
});

// We Will Handle Delete Req 
app.delete("/mens/:id", async (req, res) => {
  try {
    const getMen = await MensRanking.findByIdAndDelete(req.params.id);
   res.send(getMen);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on the server ${port}`);
});
