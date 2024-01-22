const mongoose = require("../db").regexEngPhy1stBangConnection;
const { Schema } = require("mongoose");

const questionSchema = new Schema(
    {
        question: [
            {
                type: { type: String },
                value: String,
            },
        ],
        questionImg: {
            type: String,
            default: "",
        },
        options: [
            {
                type: { type: String },
                value: String,
            },
        ],
        rightAns: {
            type: String,
            required: true,
        },
        topic: {
            type: String,
            default: "empty",
        },
        isCalcAllowed: {
            type: Boolean,
            default: false,
        },
    },
    { collection: "c1-easy" }
);

const QuestionModel = mongoose.model("Question", questionSchema);

module.exports = QuestionModel;
