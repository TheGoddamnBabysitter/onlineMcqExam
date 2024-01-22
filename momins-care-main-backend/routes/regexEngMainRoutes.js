const router = require("express").Router();
const regexEngMainController = require("../controllers/regexEngMainController");

router.post("/subject", regexEngMainController.getSubject);

module.exports = router;
