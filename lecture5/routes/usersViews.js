const express = require("express");
const User = require("../models/user")

const router = express.Router();

router.get("/add", (req, res) => {
    res.render("add-user", { title: "Add User" })
})

router.post("/add", async (req, res) => {
    await User.add(req.body);
    res.redirect("/users/view")
})

router.get("/view", async (req, res) => {
    const users = await User.getAll();
    res.render("view-users", { title: "View Users", users })
})

router.get("/del/:id", async (req, res) => {
    await User.remove(req.params.id)
    res.redirect("/users/view")
})

router.get("/edit/:id", async (req, res) => {
    const user = await User.getOne(req.params.id)
    res.render("edit-user", { title: "Edit Users", user })
})

router.post("/edit/:id", async (req, res) => {
    console.log("edit");
    console.log(req.body);
    await User.edit(req.params.id, req.body)
    res.redirect("/users/view")
})


module.exports = router