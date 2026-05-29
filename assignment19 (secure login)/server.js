const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/securelogin")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const SECRET_KEY = "mysecretkey";


// SIGNUP
app.post("/signup", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const hashedPassword =
        await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});


// LOGIN
app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user =
        await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});