const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.MONGO_URL;

const otpConnection = mongoose.createConnection(
  `${connectionString}/otp?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

otpConnection.on(
  "error",
  console.error.bind(console, "OTP database connection error:")
);

otpConnection.once("open", () => {
  console.log("Connected to OTP database");
});

const userConnection = mongoose.createConnection(
  `${connectionString}/user?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

userConnection.on(
  "error",
  console.error.bind(console, "User database connection error:")
);
userConnection.once("open", () => {
  console.log("Connected to User database");
});

const userExamHistoryConnection = mongoose.createConnection(
  `${connectionString}/userExamHistory?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

userExamHistoryConnection.on(
  "error",
  console.error.bind(console, "User Exam History database connection error:")
);
userExamHistoryConnection.once("open", () => {
  console.log("Connected to User Exam History database");
});

const regexEngPhy1stBangConnection = mongoose.createConnection(
  `${connectionString}/regex-eng-phy1st-bang?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

regexEngPhy1stBangConnection.on(
  "error",
  console.error.bind(
    console,
    "regex-eng-phy1st-bang database connection error:"
  )
);
regexEngPhy1stBangConnection.once("open", () => {
  console.log("Connected to regex-eng-phy1st-bang database");
});

const regexEngMainDatabaseConnection = mongoose.createConnection(
  `${connectionString}/regex-eng-main-eng?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

regexEngMainDatabaseConnection.on(
  "error",
  console.error.bind(
    console,
    "regex-eng-main-eng database connection error:"
  )
);
regexEngMainDatabaseConnection.once("open", () => {
  console.log("Connected to regex-eng-main-eng database");
});

module.exports = {
  otpConnection,
  userConnection,
  userExamHistoryConnection,
  regexEngPhy1stBangConnection,
  regexEngMainDatabaseConnection
};
