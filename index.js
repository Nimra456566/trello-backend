const express = require("express");
const app = express();
const PORT= 3000;
const boardRoutes = require("./routes/board.routes.js");
app.use(express.json());

app.use("/boards", boardRoutes);
app.get("/", (req, res) => {
  res.send("server running");
});
app.listen(PORT, () => {
  console.log(`server running at  http://localhost:${PORT}`);
});
