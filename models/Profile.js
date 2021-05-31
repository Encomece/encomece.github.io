const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
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
  contactNumber: {
    type: Number,
  },
  city: {
    type: String,
  },
  zip: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
