const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/User");
var bodyParser = require("body-parser");
const {v4:uuidv4} = require('uuid')
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connect");
  } catch (err) {
    console.log("Failed to connect the DB", err);
  }
};

connectDB();

app.post("/addaccount", async (req, res) => {
  try {
    const {username, email, amount, account_number } = req.body;
    const UserDoc = await User.create({
      username,
      email,
      amount,
      account_number : uuidv4(),
    });

    res.json(UserDoc);
  } catch (error) {
    console.log("error in posting or adding user", error);
  }
});

app.get("/accounts", async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

app.post("/transcation", async (req, res) => {
  const { From, To, Amount } = req.body;
  const Sender = await User.find({ account_number: From });
  const Recever = await User.find({ account_number: To });

  const newSender = await User.findOneAndUpdate(
    { account_number: From },
    { $inc: { amount: Amount } }
  );
  const newRecever = await User.findOneAndUpdate(
    { account_number: To },
    { $inc: { amount: -Amount } }
  );

  res.json(newSender.amount);
});

app.listen(4000, (req, res) => {
  console.log("Hi");
});
