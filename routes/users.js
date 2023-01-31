const express = require("express");
const router = express.Router();
const { postRegister } = require("../controllers/users");

router.get("/", (req, res, next) => {
  res.send("index");
});

/* GET users /register. */
router.get("/register", (req, res, next) => {
  res.send("GET /register");
});

/* POST users /register. */
router.post("/register", postRegister);

/* GET users /login. */
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* POST  /login. */
router.post("/login", (req, res, next) => {
  res.send("POST /login");
});

/* GET  /profile. */
router.get("/profile", (req, res, next) => {
  res.send("POST /users/profile");
});
/* PUT  /profile. */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT /profile/:user_id");
});

/* GET  /forgot. */
router.get("/forgot", (req, res, next) => {
  res.send("GET /forgot");
});
/* PUT  /forgot. */
router.put("/forgot", (req, res, next) => {
  res.send("PUT /forgto");
});
/* GET  /reset/:token. */
router.get("/reset/:token", (req, res, next) => {
  res.send("GET /reset/:token");
});
/* PUT  /reset/:token. */
router.put("/reset/:token", (req, res, next) => {
  res.send("PUT /reset/:token");
});

module.exports = router;
