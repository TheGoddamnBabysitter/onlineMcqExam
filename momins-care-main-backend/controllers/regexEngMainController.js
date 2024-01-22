const regexEngMainModel = require("../models/regexEngMainModel");

const getSubject = async (req, res) => {
  try {
    const subject = req.body.subject;

    const subjectObject = await regexEngMainModel.findOne({ subject });

    res.status(200).json({ success: true, chapters: subjectObject.chapters });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getSubject,
};
