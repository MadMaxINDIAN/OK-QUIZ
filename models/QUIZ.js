const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuizSchema = new Schema({
    userID : {
        type: String,
        required: true
    },
    visibility : {
        type : String,
        required : true
    }
});

module.exports = User = mongoose.model("QUIZ",QuizSchema);