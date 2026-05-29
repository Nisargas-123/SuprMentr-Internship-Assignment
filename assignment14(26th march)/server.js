const express = require("express");
const app = express();

app.use(express.json());

app.get("/books", (req, res) => {
    res.send("Books route working");
});

app.get("/authors", (req, res) => {
    res.send("Authors route working");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});