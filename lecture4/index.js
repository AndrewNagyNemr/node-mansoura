const mongoose = require("mongoose");
const { createUser } = require("./models/users");

mongoose
  .connect("mongodb://localhost:27017/mansouraDB")
  .then(() => {
    console.log("Successfully connected to Mansoura database");
  })
  .catch((err) => {
    console.log(err);
  });

createUser({
    firstName : "Andrew",
    lastName : "Nagy",
    email :"annagy@iti.gov.eg"
}).then((user)=>{
    console.log(user);
})