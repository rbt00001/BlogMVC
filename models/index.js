const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./commentSection");

Blog.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog, Comment };
