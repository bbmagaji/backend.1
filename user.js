
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const {
      email,
      fullName,
      username,
      password,
      gender,
      address,
      buildingNumber,
      landmark1,
      landmark2,
      pincode
    } = req.body;

    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exists"
      });
    }

    const foundUsername = await User.findOne({ username });

    if (foundUsername) {
      return res.status(409).json({
        success: false,
        message: "Username already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      fullName,
      username,
      password: hashedPassword,
      gender,
      address,
      buildingNumber,
      landmark1,
      landmark2,
      pincode
    });

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
