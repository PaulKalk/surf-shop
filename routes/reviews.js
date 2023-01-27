const express = require("express");
const router = express.Router({ mergeParams: true }); //gives us accsses to post :id

/* GET  reviews index /posts/:id/reviews */
router.get("/", (req, res, next) => {
  res.send("index  posts/:id/reviews");
});

/*POST create /posts/:id/reviews  *-creating route for rendering our post*/
router.post("/", (req, res, next) => {
  res.send("CREATE /reviews");
});

/*Get show /posts/:id/reviews/:review_id   */
router.get("/:review_id", (req, res, next) => {
  res.send("SHOW /posts/:id/reviews/:review_id ");
});

/*Get edit   /posts/:id/reviews/:review_id/edit  */
router.get("/:review_id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/reviews/:review_id ");
});

/*Get update /posts/:id/reviews/:review_id */
router.put("/:review_id", (req, res, next) => {
  res.send("UPDATE /posts/:id/reviews/:review_id ");
});

/*DELETE destroy /posts/:id/reviews/:review_id */
router.delete("/:review_id", (req, res) => {
  res.send("DELET /posts/:id/reviews/:review_id ");
});

module.exports = router;
