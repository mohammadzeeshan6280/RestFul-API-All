const mongoose =  require("mongoose");


const menSchema = new mongoose.Schema({
    ranking : {
        type : Number,
        required : true,
        unique : true
        },
        name : {
            type : String,
            required : true,
            unique : true
        },
        dob : {
            type : Date,
            required : true,
            unique : true
        },
        country : {
            type : String,
            required : true,
            unique : true
        },
        score : {
            type : Number,
            required : true,
            unique : true
            },
        event : {
            type : String,
            default : "100m"
        }
})

const MensRanking = new mongoose.model("MensRanking", menSchema);

module.exports = MensRanking;
