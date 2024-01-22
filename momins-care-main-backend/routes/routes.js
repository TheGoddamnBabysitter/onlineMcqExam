const router = require("express").Router();
const otpRoutes = require("./otpRoutes");
const userRoutes = require("./userRoutes");
const examRoutes = require("./examRoutes");
const pastExamRoutes = require("./pastExamRoutes");
const regexEngMainRoutes = require("./regexEngMainRoutes");

router.use(otpRoutes);
router.use(userRoutes);
router.use(examRoutes);
router.use("/past-exam", pastExamRoutes);
router.use("/regex-eng", regexEngMainRoutes);

module.exports = router;
