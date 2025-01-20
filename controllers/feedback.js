import { feedback } from "../models/feedback.js";
import { User } from "../models/user.js";
import { v4 as uuidv4 } from "uuid";

export const addFeedback = async (req, res) => {
  try {
    const { userId, comments, rating } = req.body;

    if (!userId || !comments || !rating) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const newFeedback = new feedback({
      id: uuidv4(),
      user: user,
      comments,
      rating,
    });

    await newFeedback.save();

    user.feedback.push(newFeedback);
    await user.save();

    res
      .status(201)
      .json({ message: "Feedback added successfully.", newFeedback });
  } catch (error) {
    res.status(500).json({ message: "Internal server error.", error });
  }
};
