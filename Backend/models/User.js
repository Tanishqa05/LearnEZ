const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending", // default status when a user signs up as a teacher
    required: true,
  },
  branch: {
    type: String,
    enum: ["CSE"],
    default: "CSE",
    required: true,
  },
  profile: {
    type: String,
    default: "",
  },
  phoneNumber: Number,
  password: {
    type: String,
    required: true,
  },

  courses: [
    {
      courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
