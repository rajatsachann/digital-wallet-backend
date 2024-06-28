const mongoose = require("mongoose");
const dotenv = require("dotenv");

//keeps sensitive data out of code
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // ensures mongodb connection string parser and new server discovery and monitoring engine
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error", error);
    // forces to exit with an error code 1
    process.exit(1);
  }
};

module.exports = connectDB;
