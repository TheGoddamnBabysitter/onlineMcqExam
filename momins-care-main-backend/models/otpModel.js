const mongoose = require("../db").otpConnection;
const { Schema } = require("mongoose");

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 11,
    },
});

module.exports = mongoose.model("OTP", otpSchema, "code");
