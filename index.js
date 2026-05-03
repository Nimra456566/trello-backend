const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./database/mongodb.config.js");
connectDB();

console.log("URI:", process.env.MONGODB_URI);

const app = express();
const PORT = 3000;
//const boardRoutes = require("./routes/board.routes.js");
app.use(express.json());

//app.use("/boards", boardRoutes);
app.get("/", (req, res) => {
  res.send("server running");
});
app.listen(PORT, () => {
  console.log(`server running at  http://localhost:${PORT}`);
});
