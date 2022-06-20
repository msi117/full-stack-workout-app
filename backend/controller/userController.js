const asyncHandler = require("express-async-handler");

// @desc Register new User
// POST /api/user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if (!name || !email || !password) {
    res.status(400).json({
      message: "Invalid request",
    });
  }

  res.json({
    name,
    email,
    password,
  });

  
});

// @desc Register new User
// POST /api/user
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User Logged In",
  });
});

module.exports = {
  registerUser,
  loginUser,
};
