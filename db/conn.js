const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ramzan", {
}).then(() =>{
console.log("Connection is Successful")
}).catch((err) => {
    console.log("No Connection")
})