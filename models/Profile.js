const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    company: {
      type: String,
    },
    description: {
      type: String,
    },
    profilePic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
