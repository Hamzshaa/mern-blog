import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    // return resizeBy.status(400).json({ message: "All fields are required" });
    return next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isPasswordValid = bcryptjs.compareSync(password, user.password);
    if (!isPasswordValid) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
