const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("a successful connection to database !!! ");
  } catch (error) {
    console.log("There is an error in the connection with mongoDb : ", error);
  }
};

module.exports = connectToDb;
