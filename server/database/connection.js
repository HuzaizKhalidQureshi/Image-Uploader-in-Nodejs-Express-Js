const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message || `MongoDB Not Connected`);
    process.exit(1);
  }
};

module.exports = connectDB;
