const Profile = require("../models/Profile");

//create and update profile details
module.exports.profile_details = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contactNumber,
      city,
      zip,
      description,
      email,
      userId,
    } = req.body;
    const getUser = await Profile.findOne({ userId: userId });
    if (getUser) {
      await Profile.findOneAndUpdate(
        { userId: userId },
        {
          $set: {
            firstName: firstName == null ? getUser.firstName : firstName,
            lastName: lastName == null ? getUser.lastName : lastName,
            contactNumber:
              contactNumber == null ? getUser.contactNumber : contactNumber,
            city: city == null ? getUser.city : city,
            zip: zip == null ? getUser.zip : zip,
            description:
              description == null ? getUser.description : description,
          },
        }
      );
      res.status(201).json({ ok: true, message: "Profile Updated" });
    } else {
      const new_details = {
        userId,
        email,
        firstName,
        lastName,
        contactNumber,
        city,
        zip,
        description,
      };

      const new_profile = await new Profile(new_details);
      await new_profile.save();
      res.status(201).json({ ok: true, message: "Profile Updated" });
    }
  } catch (err) {
    console.log(err);
    res.json({ ok: false, message: "Something went wrong", error: err });
  }
};

//get profile Details
module.exports.get_profile_details = async (req, res) => {
  try {
    const { id } = req.params;
    const getUserProfile = await Profile.findOne({ userId: id });
    if (getUserProfile) res.json({ details: getUserProfile._doc, ok: true });
    else res.json({ ok: false, message: "Not Available" });
  } catch (error) {
    console.log(error);
    res.json({ ...error, ok: false });
  }
};
