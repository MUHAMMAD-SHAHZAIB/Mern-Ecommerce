const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./DatabaseConnection/DataBase");
dotenv.config({ path: "./server/Config/Config.env" });

//=============================Handling Uncaught Exception===============================
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

//========================MongooDB connection start with Server Start====================
connectDatabase();
//========================MongooDB connection start with Server End======================

//============================= Server Starting Command Start======================
const server = app.listen(process.env.PORT, () => {
  console.log(`Server Started on port http://localhost:${process.env.PORT}`);
});
//============================= Server Starting Command End========================
