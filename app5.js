const express = require("express");
const db = require("./db/conn")
const Student = require("./models/students")
const studentRouter = require("./routers/student")
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())
// We need to Register our Router
app.use(studentRouter);

app.listen(port, () => {
    console.log(`Listening on the server ${port}`);
})