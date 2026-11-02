import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    buildingNumber: {
      type: String,
      required: true,
      trim: true,
    },

    landmark1: {
      type: String,
      required: true,
      trim: true,
    },

    landmark2: {
      type: String,
      trim: true,
      default: "",
    },

    pincode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;