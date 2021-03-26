const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set("view engine", "ejs");
// app.set("views", "views");

app.use("/api/users", require("./routes/users"))

// app.get("/", (req, res)=>{
//     // res.send("<h1>Hello</h1>")
//     // res.sendFile("./main.html")
//     // console.log(path.join(__dirname, "main.html"));
//     res.sendFile(path.join(__dirname, "main.html"))
// })
app.get("/", (req, res)=>{
    res.render("main", {title : "My Users app"})
})

app.post("/users", (req, res)=>{
    // console.log(req.body);
    // user model 
    //  User.add(req.body)
})

// app.get("/users", (req, res)=>{
//     // user model 
//     // User.getAll()
//     // send file()
//     const user
//     res.send(`
//         <ul>
//             <li>${user.firstname}</li>
//         </ul>
//     `)

// })


mongoose.connect("mongodb://localhost/lecture5", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongodb");
}).catch(err => {
    console.log(err);
})

const port = process.env.PORT || 5000

app.listen(port, (err) => {
    if (!err) console.log(`listening on port ${port}`);
})