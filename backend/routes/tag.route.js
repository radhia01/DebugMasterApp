const express = require("express");
const {} = require("../controller/problem.controller");
const {
  addTag,
  getTags,
  getTagsProblems,
} = require("../controller/tag.controller");
const router = express.Router();
// ADD new tag
router.post("/api/tags/:idprobleme", addTag);
// get all tags
router.get("/api/tags", getTags);

module.exports = router;
