const QuestionModel = require("../models/questionModel");
const userExamHistoryModel = require("../models/userExamHistoryModel");

const getExam = async (req, res) => {
  try {
    const uid = req.body.uid;
    // const pastExams = [];
    // try {
    const userExamHistory = await userExamHistoryModel.findOne({ uid });
    const pastExams = userExamHistory.regexEng;
    // console.log(pastExams);
    // } catch (err) {
    //   console.log(err);
    // }

    res.status(200).json({ message: "Successfully fetched exam", pastExams });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const previousExam = async (req, res) => {
  try {
    const uid = req.body.uid;
    const questionSetId = req.body.questionSetId;

    const userExamHistory = await userExamHistoryModel.findOne({ uid });
    const pastExams = userExamHistory.regexEng.slice().reverse();

    const exam = pastExams.find((singleQuestionSet) =>
      singleQuestionSet._id.equals(questionSetId)
    );

    // console.log(exam);

    const promises = exam.questionSet.map((item) => {
      return QuestionModel.findById(item._id);
    });

    const questions = await Promise.all(promises);

    console.log("questions ", questions);

    const changedQuestionSet = [];

    questions.forEach((item) => {
      console.log(item);
      userAnswer = exam.questionSet.find((singleQuestion) =>
        singleQuestion._id.equals(item._id)
      ).userAnswer;

      changedQuestionSet.push({ ...item._doc, userAnswer });
    });

    const updatedExam = {
      ...exam._doc, // Copy existing properties
      questionSet: changedQuestionSet, // Update questionSet property
    };

    // console.log(exam);
    res
      .status(200)
      .json({ message: "Successfully fetched exam", exam: updatedExam });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getExam,
  previousExam,
};
