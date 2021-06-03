const Profile = require("../models/Profile");

//create and update profile details
module.exports.profile_details = async (req, res) => {
  try {
    const { firstName, lastName, description, email, userId, company } =
      req.body;
    const { path } = req.file;
    const image_path = process.env.IMAGE_BASE_URL + req.file.filename;

    const getUser = await Profile.findOne({ userId: userId });
    if (getUser) {
      await Profile.findOneAndUpdate(
        { userId: userId },
        {
          $set: {
            firstName: firstName.length == 0 ? getUser.firstName : firstName,
            lastName: lastName.length == 0 ? getUser.lastName : lastName,
            description:
              description.length == 0 ? getUser.description : description,
            profilePic: path.length == 0 ? getUser.profilePic : image_path,
            company: company.length == 0 ? getUser.company : company,
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
        company,
        description,
        profilePic: path.length != 0 && image_path,
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
