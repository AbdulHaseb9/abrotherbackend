const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connected");
  } catch (error) {
    console.log("db not connect", error);
  }
};

module.exports = dbconnect;
