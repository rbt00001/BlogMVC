const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "UAC"]],
    });

    const users = userData.map((Blog) => Blog.get({ plain: true }));

    res.render("homepage", { users });
  } catch (err) {
    res.status(500).json(err);
  }
  res.render("homepage");
});

module.exports = router;
