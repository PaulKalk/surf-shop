const User = require("../models/user");
const passport = require("passport");

module.exports = {
  //post /register
  async postRegister(req, res, next) {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      image: req.body.image,
    });

    await User.register(newUser, req.body.password);
    res.redirect("/");
  },
  //post /login
  postLogin(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "login",
    })(req, res, next);
  },
};

module.exports.getLogout = (req, res, next) => {
  // get /logout
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/");
};
