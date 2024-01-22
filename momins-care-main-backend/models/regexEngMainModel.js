const mongoose = require("../db").regexEngMainDatabaseConnection;
const { Schema } = require("mongoose");

const regexEngMainSchema = new Schema(
  {
    subject: String,
    chapters: [String],
  },
  { collection: "subject-list" }
);

const regexEngMainModel = mongoose.model("subject-list", regexEngMainSchema);

module.exports = regexEngMainModel;
