const express = require("express");

const app = express();

const taskRoutes =
require("./routes/taskRoutes");

app.use(express.json());

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
    res.send("Task Manager API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});