const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/mongodb.config.js");
dotenv.config();
connectDB();

const app = express();

// middleware (JSON data read karne ke liye)
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./database/mongodb.config.js");
connectDB();

console.log("URI:", process.env.MONGO_URI);

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
});*/
