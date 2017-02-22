var express = require("express");
var morgan = require("morgan");
var app = express();   //calls express functions
var bodyParser = require("body-parser"); //turns request body into JS object that's easy to read and manipulate
var idCount = 2
var questions = [
    {
        ques: "Write a function to sum all the numbers in an array",
        id: 1,
        votes: 0
    },
    {
        ques: "Write a function to multiply all the numbers in an array",
        id: 2,
        votes: 0
    }
];
var postParse = bodyParser.urlencoded({  //function defined to use body-parsar
    extended: false

});
app.use(express.static('public')); //allows access to files in public folder

app.put("/api/vote", postParse, function(req, res){
    console.log(req.body.QID)
    res.send();
    res.end();
});

app.post("/api/newQuestion", postParse, function(req, res){
    idCount++;
    questions.push({ ques: req.body.newQ, id: idCount, votes: 0 })
    console.log(questions)
    res.send("0");
    res.end();
});

app.get("/api/questions", function(req, res){
    res.json(questions);
});

app.listen(3000);
