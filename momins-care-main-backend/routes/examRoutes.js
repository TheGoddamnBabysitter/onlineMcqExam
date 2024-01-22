const router = require("express").Router();
const examController = require("../controllers/examController");

router.post("/create-exam", examController.createExam);
router.post("/submit-exam", examController.submitExam);

module.exports = router;
