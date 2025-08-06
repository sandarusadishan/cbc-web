import User from "../models/user.js";
import bcrypt from "bcrypt";

export function createUser(req, res) {

  const newUserData = req.body
  newUserData.password = bcrypt.hashSync(newUserData.password, 10)
  console.log(newUserData);
  
  const user = new User(newUserData);

  user
    .save()
    .then(() => {
      res.json({
        message: " User Created",
      });
    })
    .catch(() => {
      res.json({
        message: "User not created",
      });
    });
}
