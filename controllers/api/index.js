const router = require("express").Router();
const userRoutes = require("./userRoutes");
const BlogRoutes = require("./blogRoutes");

router.use("/users", userRoutes);
router.use("/blogs", BlogRoutes);

module.exports = router;
