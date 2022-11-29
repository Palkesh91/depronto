const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
  }));


app.get('/introduction' , (req,res) => {
    res.render("introduction");
});
app.get('/feedback' , (req,res) => {
    res.render("feedback");
});


app.listen(3000 , () => {
    console.log("server started on port 3000");
});