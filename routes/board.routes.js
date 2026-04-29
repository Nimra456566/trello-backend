const express = require("express");
const router = express.Router();

const { createBoard, getAllBoards } = require("../controllers/board.controller");

router.post("/", createBoard);
router.get("/", getAllBoards);

module.exports = router;