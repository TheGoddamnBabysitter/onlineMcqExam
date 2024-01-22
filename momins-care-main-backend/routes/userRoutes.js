const router = require("express").Router();

const userModel = require("../models/userModel");

router.post("/register", async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error,
        });
    }
});

module.exports = router;
