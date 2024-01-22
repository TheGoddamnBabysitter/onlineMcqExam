const mongoose = require("../db").userConnection;
const { Schema } = require("mongoose");

const examSchema = new Schema({
    examName: {
        type: String,
        required: true,
    },
    examDate: {
        type: String,
        required: true,
    },
    examTime: {
        type: String,
        required: true,
    },
    examDuration: {
        type: String,
        required: true,
    },
    examTotalMarks: {
        type: Number,
        required: true,
    },
    examPassingMarks: {
        type: Number,
        required: true,
    },
    examTotalQuestions: {
        type: Number,
        required: true,
    },
    examQuestions: {
        type: Array,
        required: true,
    },
    examCreatedBy: {
        type: String,
        required: true,
    },
    examCreatedOn: {
        type: String,
        required: true,
    },
    examUpdatedBy: {
        type: String,
        required: true,
    },
    examUpdatedOn: {
        type: String,
        required: true,
    },
    
});
