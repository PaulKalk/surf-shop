const express = require("express");
const router = express.Router();
/* GET index /posts. */
router.get("/", (req, res, next) => {
  res.send("index/posts");
});

/*Get posts new  /posts/new  *-creating route for rendering our post*/
router.get("/new", (req, res, next) => {
  res.send("NEW/posts/new");
});
/*POST create posts/  *-creating route for rendering our post*/
router.post("/", (req, res, next) => {
  res.send("CREATE /posts");
});
/*Get show posts/:id   */
router.get("/:id", (req, res, next) => {
  res.send("SHOW/posts/:id");
});
/*Get edit posts/:id/edit  */
router.get("/:id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/edit");
});
/*Get update posts/:id */
router.put("/:id", (req, res, next) => {
  res.send("EDIT posts/:id");
});

/*DELETE destroy posts/:id */
router.delete("/:id", (req, res) => {
  res.send("DELET /posts/:id");
});

module.exports = router;
