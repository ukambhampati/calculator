//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res) {
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res) {
  res.send("The result of calculation is : "+(Number(req.body.number1)+Number(req.body.number2)));
});

app.get("/bmiCalculator",function(req,res) {
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req,res) {
  console.log("Numbers: "+req.body.weight + " " +req.body.height);
  var weight = req.body.weight;
  var height = req.body.height;
  var heightInMeters = Number(height)*0.01;
  var bmi = weight/(heightInMeters*heightInMeters);
  if(Number(bmi)<18.5) {
    res.send("You are underweight.Suggest to eat good food");
  } else if(Number(bmi)>18.5 && Number(bmi)<24.9) {
    res.send("You are normalweight.Please maintain diet and exercise regularly");
  } else if (Number(bmi)>24.9 && Number(bmi)<29.9) {
    res.send("You are overweight.Recommend to maintain diet and exercise");
  } else {
    res.send("You are Obese.Please take doctor suggestions");
  }
});
app.listen(3000,function() {
  console.log("server 3000 started");
});
