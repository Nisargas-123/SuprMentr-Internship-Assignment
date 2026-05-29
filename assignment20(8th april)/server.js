const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

const {
    verifyToken,
    isAdmin
} = require("./middleware/auth");

const app = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";

mongoose.connect(
    "mongodb://127.0.0.1:27017/roleguard"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// SIGNUP
app.post("/signup", async (req, res) => {

    try {

        const {
            username,
            email,
            password,
            role
        } = req.body;

        const hashedPassword =
        await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword,
            role
        });

        await user.save();

        res.status(201).json({
            message: "User Registered"
        });

    } catch (error) {

        res.status(500).json(error);

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
                message: "User Not Found"
            });

        }

        const match =
        await bcrypt.compare(
            password,
            user.password
        );

        if (!match) {

            return res.status(401).json({
                message: "Invalid Password"
            });

        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            token
        });

    } catch (error) {

        res.status(500).json(error);

    }
});


// USER ROUTE
app.get(
    "/profile",
    verifyToken,
    (req, res) => {

        res.json({
            message: "Welcome User",
            user: req.user
        });

    }
);


// ADMIN ROUTE
app.get(
    "/admin",
    verifyToken,
    isAdmin,
    (req, res) => {

        res.json({
            message: "Welcome Admin"
        });

    }
);

app.listen(3000, () => {
    console.log(
        "Server running on port 3000"
    );
});