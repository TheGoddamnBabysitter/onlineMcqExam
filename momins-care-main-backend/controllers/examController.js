const QuestionModel = require("../models/questionModel");
const userExamHistoryModel = require("../models/userExamHistoryModel");

const createExam = async (req, res) => {
  try {
    const questionSet = await QuestionModel.find({}, null, {
      collection: "c1-medium",
    });

    // get random 30 quizes from questionset and create a new questionset
    const newQuestionSet = questionSet
      .sort(() => 0.5 - Math.random())
      .slice(0, req.body.questionCount);

    // console.log("newQuestionSet");
    // console.log(newQuestionSet);

    const newQuestionSetObject = {
      questionSet: [
        ...newQuestionSet.map((question) => ({
          _id: question._id,
          correctAnswer: question.rightAns,
        })),
      ],
      subject: req.body.subject,
      chapter: req.body.chapter,
      totalTime: req.body.totalTime,
    };

    console.log(req.body);
    // console.log("newQuestionSetObject");
    // console.log(newQuestionSetObject);

    // extract only the id, options, from the questionset
    const changedQuestionSet = newQuestionSet.map((item) => {
      const { _id, ...items } = item;
      const { rightAns, topic, ...rest } = item._doc;
      // console.log(item._doc);
      return { _id, ...rest };
    });

    // console.log("changedQuestionSet");
    // console.log(changedQuestionSet);

    if (await userExamHistoryModel.findOne({ uid: req.body.uid })) {
      try {
        const result = await userExamHistoryModel.updateOne(
          { uid: req.body.uid },
          {
            $push: {
              regexEng: newQuestionSetObject,
            },
          }
        );

        if (result.modifiedCount > 0) {
          console.log("Successfully added a new object to regexEng");
          const updatedDocument = await userExamHistoryModel.findOne({
            uid: req.body.uid,
          });
          const newRegexObject = updatedDocument.regexEng.slice(-1)[0];
          questionSetId = newRegexObject._id;
        } else {
          console.log("No documents matched the query for update.");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      try {
        const userExamHistory = new userExamHistoryModel({
          uid: req.body.uid,
          regexEng: [newQuestionSetObject, ],
        });

        await userExamHistory.save();
        const updatedDocument = await userExamHistoryModel.findOne({
          uid: req.body.uid,
        });
        const newRegexObject = updatedDocument.regexEng.slice(-1)[0];
        questionSetId = newRegexObject._id;
      } catch (err) {
        console.error("Error:", err);
      }
    }

    res.status(201).json({
      success: true,
      questionSetId,
      questionSet: changedQuestionSet,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const submitExam = async (req, res) => {
  try {
    const { questionSetId, uid, userAnswers, restTime } = req.body;
    console.log(userAnswers);

    const userExamHistory = await userExamHistoryModel.findOne({ uid });

    const reversedArray = userExamHistory.regexEng.slice().reverse();

    const regexEngObjectToUpdate = reversedArray.find(
      (item) => item._id.toString() == questionSetId
    );

    const rightAnsSet = {};

    let correctTotal = 0;
    let incorrectTotal = 0;
    let notAttemptedTotal = 0;

    let obtainedMarks = 0;
    let totalMarks = 0;

    if (regexEngObjectToUpdate) {
      const { questionSet } = regexEngObjectToUpdate;

      const updatedQuestionSet = questionSet.map((item) => {
        console.log(item);
        const { _id: questionId } = item;
        console.log("questionId", questionId);
        const userAnswer = userAnswers[questionId];
        console.log("userAnswer", userAnswer);
        // console.log({ _id: questionId, userAnswer });
        return { _id: questionId, userAnswer };
      });

      // get questions according to generated question from the questionSet
      const promises = regexEngObjectToUpdate.questionSet.map((item) => {
        return QuestionModel.findById(item._id);
      });

      const questions = await Promise.all(promises);

      questions.forEach((question, index) => {
        if (question) {
          rightAnsSet[regexEngObjectToUpdate.questionSet[index]._id] =
            question.rightAns;
        }
      });

      console.log(rightAnsSet);
      console.log(userAnswers);

      const newUserAnsRightAnsArray = [];

      for (const id in rightAnsSet) {
        if (userAnswers.hasOwnProperty(id)) {
          const obj = {
            _id: id,
            userAns: userAnswers[id],
            rightAns: rightAnsSet[id],
          };
          newUserAnsRightAnsArray.push(obj);
        }
      }

      newUserAnsRightAnsArray.forEach((item) => {
        if (item.userAns === parseInt(item.rightAns)) {
          correctTotal++;
        } else if (item.userAns === null) {
          notAttemptedTotal++;
        } else {
          incorrectTotal++;
        }
      });

      console.log(newUserAnsRightAnsArray);

      obtainedMarks = correctTotal - incorrectTotal * 0.25;
      totalMarks = regexEngObjectToUpdate.questionSet.length;

      regexEngObjectToUpdate.obtainedMarks = obtainedMarks;
      regexEngObjectToUpdate.totalMarks = totalMarks;
      regexEngObjectToUpdate.correctTotal = correctTotal;
      regexEngObjectToUpdate.incorrectTotal = incorrectTotal;
      regexEngObjectToUpdate.notattemptedTotal = notAttemptedTotal;
      regexEngObjectToUpdate.restTime = restTime;

      regexEngObjectToUpdate.questionSet = updatedQuestionSet;
      console.log("\n\n\n");
      console.log(regexEngObjectToUpdate.questionSet);

      await userExamHistory.save();
    } else {
      console.log("not found");
    }
    res.status(200).json({
      success: true,
      rightAnsSet: rightAnsSet || {},
      obtainedMarks: obtainedMarks || 0,
      totalMarks: totalMarks || 0,
      correctTotal: correctTotal || 0,
      incorrectTotal: incorrectTotal || 0,
      notAttemptedTotal: notAttemptedTotal || 0,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createExam,
  submitExam,
};
