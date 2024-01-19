const express = require("express");
const {
  createProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  getProblemTags,
  getProblem,
  getProblemsByTag,
} = require("../controller/problem.controller");

const router = express.Router();

// Route to create a new problem
router.post("/api/problems/users/:idUser", createProblem);

// Route to get all problems
router.get("/api/problems", getProblems);

// Route to delete a problem
router.delete("/api/problems/:id", deleteProblem);

// Route to update a problem
router.put("/api/problems/:id", updateProblem);

// Route to get all tags associated with a problem
router.get("/api/tags/problem/:id_problem", getProblemTags);

// Route to get details of a specific problem
router.get("/api/problems/details/:id", getProblem);

// Route to get problems associated with a specific tag
router.get("/api/problems/tag/:id", getProblemsByTag);

module.exports = router;
