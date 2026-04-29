let boards = [];

// CREATE BOARD
const createBoard = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Board name required"
    });
  }

  const newBoard = {
    id: Date.now(),
    name
  };

  boards.push(newBoard);

  res.status(201).json({
    success: true,
    data: newBoard
  });
};

// GET ALL BOARDS
const getAllBoards = (req, res) => {
  res.status(200).json({
    success: true,
    data: boards
  });
};

module.exports = { createBoard, getAllBoards };