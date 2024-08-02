const express = require("express");
const { accessControl, defaultMiddleware } = require("./middleware");

const users = [
  { id: 1, name: "Ümit Mamuk", place: "Balıkesir" },
  { id: 2, name: "Hamza Sezai Kars", place: "Akisar" },
];

const app = express();
const PORT = 3000;
// app.use(accessControl); // Uygulama Kapsamında Middleware
app.use(express.json());
// Get Request
// localhost:3000/users

app.get("/users", (req, res, next) => {
  res.json({
    success: true,
    data:users
  });
});

app.post("/users", (req, res, next) => {
  const user = req.body;
    users.push(user);
  res.send({
    success: true,
    data: users,
  });
});

app.put("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            users[i] = 
            {
                ...users[i],
                ...req.body}
        }
    }
  res.send({
    success: true,
    data: users,
  });
});

app.delete("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i, 1);
        }
    }
  res.send({
    success: true,
    data: "Delete Request",
  });
});
app.listen(PORT, () => {
  console.log("Server Started PORT: " + PORT);
});
