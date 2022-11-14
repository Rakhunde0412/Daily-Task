const User = require("../models/User");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey its auth page");
});

//Register
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "vivek",
    email: "vivek@gmail.com",
    password: "123456",
  });
  await user.save();
  res.send("ok");
});
module.exports = router;
