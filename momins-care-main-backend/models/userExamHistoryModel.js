const mongoose = require("../db").userExamHistoryConnection;
const { Schema } = require("mongoose");

const userExamHistorySchema = new Schema({
    uid: {
        type: String,
        required: true,
    },
    regexEng: [
        {
            questionSet: [
                {
                    questionId: String,
                    userAnswer: String,
                },
            ],
            
            obtainedMarks: Number,
            totalMarks: Number,
            correctTotal: Number,
            incorrectTotal: Number,
            notattemptedTotal: Number,
            restTime: Number,
            totalTime: Number,
            subject: String,
            chapter: [String],
            timeStamp: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

module.exports = mongoose.model(
    "UserExamHistory",
    userExamHistorySchema,
    "userExamHistory"
);
