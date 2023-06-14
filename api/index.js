const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/User");
var bodyParser = require("body-parser");
const dotenv = require('dotenv')
dotenv.config()

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.URI
);

app.post("/addaccount", async (req, res) => {
  const { _id, username, email, amount, account_number } = req.body;
  const UserDoc = await User.create({
    _id,
    username,
    email,
    amount,
    account_number,
  });

  res.json(UserDoc);
});

app.get("/addaccount", async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

app.post("/transcation", async (req, res) => {
  const { From, To, Amount } = req.body;
  const Sender = await User.find({ account_number: From });
  const Recever = await User.find({ account_number: To });

  const newSender = await User.findOneAndUpdate({account_number : From}, { $inc : { "amount": Amount } })
  const newRecever = await User.findOneAndUpdate({account_number : To}, { $inc : { "amount" : -Amount } }) 

  res.json(newSender.amount)
  
});

app.listen(4000, (req, res) => {
  console.log("Hi");
});