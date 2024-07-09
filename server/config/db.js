const mongoose = require("mongoose");

const connectToTheDb = async () => {
  const connecttion = await mongoose.connect(process.env.MONGO_URL);
  console.log(connecttion ? `CONNECTED ` : `NOT CONNECTED`.cyan.underline.bold);
};

module.exports = connectToTheDb;
