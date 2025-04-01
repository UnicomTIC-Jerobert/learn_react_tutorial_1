const express = require("express");
const users = require("./sample.json");

const app = express();
const port = 8000;
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    })
);

//Display All Users
app.get("/users", (req, res) => {
    return res.json(users);
});


//Delete User Detail
app.delete("/users/:id", (req, res) => {
    let id = Number(req.params.id);
    let filteredUsers = users.filter((user) => user.id !== id);
    fs.writeFile("./sample.json", JSON.stringify
        (filteredUsers), (err, data) => {
            return res.json(filteredUsers);
        });
});

///Add New User

app.post("/users", (req, res) => {
    let { name, age, city } = req.body;
    if (!name || !age || !city) {
        res.status(400).send({ message: "All Fields Required" });
    }

    let id = Date.now();
    users.push({ id, name, age, city });

    fs.writeFile("./sample.json", JSON.stringify(users),
        (err, data) => {
            return res.json({ message: "User detail addedsuccess" });
        });
});

app.patch("/users", (req, res) => {
    let id = Number(req.params.id);
    let { name, age, city } = req.body;
    if (!name || !age || !city) {
        res.status(400).send({ message: "All Fields Required" });
    }
    let index = users.findIndex((user) => user.id == id);

    users.splice(index, 1, { ...req.body });

    fs.writeFile("./sample.json", JSON.stringify(users),
        (err, data) => {
            return res.json({ message: "User detail updated success" });
        });
});

app.listen(port, (err) => {
    console.log(`App is running in port ${port}`);
});