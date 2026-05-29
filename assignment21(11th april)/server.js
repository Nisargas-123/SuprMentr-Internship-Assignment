const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const students = [
    { id: 1, name: "Nisarga", course: "AIML" },
    { id: 2, name: "Rahul", course: "CSE" }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});