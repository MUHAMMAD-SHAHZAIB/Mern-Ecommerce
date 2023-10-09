const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    };

    await mongoose.connect(process.env.DB_URL, options);

    console.log(`Mongoose Connected to MongoDB at ${process.env.DB_URL}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDatabase;
