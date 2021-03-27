const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static("public"))

app.set("view engine", "ejs");

app.use("/api/users", require("./routes/users"))
app.use("/users", require("./routes/usersViews"))

app.get("/", (req, res)=>{
    res.render("main", {title : "My Users app"})
})


const port = process.env.PORT || 5000

mongoose.connect("mongodb://localhost/lecture5", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to mongodb");
    app.listen(port, (err) => {
        if (!err) console.log(`listening on port ${port}`);
    })
}).catch(err => {
    console.log(err);
})