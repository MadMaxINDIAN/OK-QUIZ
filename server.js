// Importing libraries for the main server
const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Databse Name
const database = "quiz_appDB"

// Connecting mongoose
mongoose.connect("mongodb+srv://admin-naman:20010922@madmaxindian-mttom.mongodb.net/" + database,{ useNewUrlParser: true,useUnifiedTopology: true },() => console.log("MongoDB connected"))
mongoose.set('useFindAndModify', false);

// Router files
const users = require("./router/users");

// Intialized App
const app = express();

// Setting bodyParser
app.use(bodyParser.urlencoded({extended : true}))

// Parsing JSON
app.use(express.json());

// Initialising router
app.use("/api/users/",users);

// Initialisin port
port = process.env.PORT || 5000;

app.listen(port, (req,res) => {
    console.log("Server is running on port " + port);
});