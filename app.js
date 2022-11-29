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

app.post("/feedback" , (req,res) =>{
    const user = {
        name: req.body.name,
        date: req.body.date,
        feedbackTitle: req.body.title,
        feedback: req.body.feedback,
        category:{
            asian:req.body.asian,
            american:req.body.american,
            other:req.body.other,
        },
        gender: req.body.gender,
        
    };
    console.log(user);
});

app.listen(3000 , () => {
    console.log("server started on port 3000");
});