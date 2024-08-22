const User = require("../model/user");

module.exports.addUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = await User.create({
    name,
    email,
    password,
    role,
  });

  return res
    .status(201)
    .json({ message: "User created successfully", data: newUser });
};

module.exports.getUsers = async (req, res) => {
  const users = await User.find({});

  return res.status(200).json({ data: users });
};

// Auth Controller

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  const userOne = await User.findOne({ email: email, password: password });

  if (!userOne) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  delete userOne.password;
  return res.status(200).json({ message: "Login successful", data: userOne });
};

module.exports.creatUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name.firstName || !name.lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  let role = "customer";

  const oldUser = await User.find({ email: email });

  if (!oldUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = await User.create({
    name,
    email,
    password,
    role,
  });

  delete newUser.password;

  return res
    .status(201)
    .json({ message: "User created successfully", data: newUser });
};
