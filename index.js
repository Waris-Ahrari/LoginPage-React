// import express from "express";
const express = require("express");
// import cors from "cors";
const cors = require("cors");
// import mongoose from "mongoose";
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const crypto = require('crypto')




const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


connectDB();

function hashPass(password){
    var hash = crypto.createHash('sha256');
    pas = hash.update(password, 'utf-8');
    hashVal = pas.digest('hex');

    return hashVal;
}
//user schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login", (req, res) => {
    var { email, password } = req.body;
    password = hashPass(password);
    
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                console.log("Logged in");
                // res.send({ message: "login sucess", user: User })
                res.redirect('/homepage')
            } else {
                res.send({ message: "wrong credentials" })
                console.log("wrong pass");
            }
        } else {
            res.send("not register")
            console.log("Not found");
        }
    })
});
app.post("/Register", (req, res) => {
    // console.log(req.body)
    var { name, email, password } = req.body;
    password = hashPass(password);


    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "user already exist" })
        } else {
            const user = new User({ name, email, password })
            console.log(user);
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "sucessfull" })
                    console.log('Registered!');
                }
            })
        }
    })
})

app.post('/homepage', function( req, res) {
    console.log("Here");
    res.send({ message: "Page load" });
  });

app.listen(6969, () => {
    console.log("started")
})