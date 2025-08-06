import User from "../models/user";

export function createUser(req, res) {
  const user = new User(req.body);

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
