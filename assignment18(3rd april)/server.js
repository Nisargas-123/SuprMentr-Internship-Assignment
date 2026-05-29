const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crudlab")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});


// CREATE
app.post("/students", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(201).json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});


// READ ALL
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.json(students);
    } catch (error) {
        res.status(500).json(error);
    }
});


// READ ONE
app.get("/students/:id", async (req, res) => {
    try {
        const student =
        await Student.findById(req.params.id);

        res.json(student);
    } catch (error) {
        res.status(500).json(error);
    }
});


// UPDATE
app.put("/students/:id", async (req, res) => {
    try {
        const updatedStudent =
        await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedStudent);
    } catch (error) {
        res.status(500).json(error);
    }
});


// DELETE
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});