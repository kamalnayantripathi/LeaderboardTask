import User from "../models/User.model.js";
import HistoryPoint from "../models/HistoryPoint.model.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    return res.status(200).json({ statusCode: 200, users, message: "Users fetched successfully" });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};

const createUsers = async (req, res) => {
  const { name, totalPoints = 0 } = req.body;
  if (!name) {
    return res.status(400).json({ statusCode: 400, message: "Name is required" });
  }

  try {
    const user = await User.create({ name, totalPoints });
    return res.status(200).json({ statusCode: 200, user, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  if (!id || id.trim() === "") {
    return res.status(400).json({ statusCode: 400, message: "User ID is required" });
  }

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ statusCode: 404, message: "User not found" });

    return res.status(200).json({ statusCode: 200, user, message: "User fetched successfully" });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};

const claimPoints = async (req, res) => {
  const id = req.params.id;
  const random = Math.floor(Math.random() * 10) + 1;

  if (!id || id.trim() === "") {
    return res.status(400).json({ statusCode: 400, message: "User ID is required" });
  }

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { $inc: { totalPoints: random } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ statusCode: 404, message: "User not found" });
    }

    const historyPoints = await HistoryPoint.create({
      userId: id,
      pointsAwarded: random,
    });

    return res.status(200).json({
      statusCode: 200,
      user,
      historyPoints,
      message: "User's total points updated and history recorded",
    });
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};

export { getUsers, createUsers, getUserById, claimPoints };
