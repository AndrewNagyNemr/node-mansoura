const express = require("express");

const app = express();

//middleware
app.use(express.json());

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Mohamed" },
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.send(user);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = users[users.length - 1].id + 1;
  users.push({id,name});
  res.send(users);
});

//edit

//delete

app.listen(5000, (error) => {
  console.log("listening on port 5000");
});
