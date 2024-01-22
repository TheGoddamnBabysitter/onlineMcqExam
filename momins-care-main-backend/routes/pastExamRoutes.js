const router = require("express").Router();
const pastExamController = require("../controllers/pastExamController");

router.post("/", pastExamController.getExam);
router.post("/solution", pastExamController.previousExam);

module.exports = router;
