const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

const createUser = (user) => {
    // const newUser = new User(user);
    // return newUser.save()
  return new User(user).save();
};

const getUsers = () => {};

const getOneUser = () => {};

const editUser = () => {};

const deleteUser = () => {};

module.exports = {
  createUser,
  getUsers,
  getOneUser,
  editUser,
  deleteUser,
};
