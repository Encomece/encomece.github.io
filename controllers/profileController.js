const Profile = require("../models/Profile");
const cloudinary = require("../config/cloudinary");

//create and update profile details
module.exports.profile_details = async (req, res) => {
  try {
    const { firstName, lastName, description, email, userId, company } =
      req.body;
    const { path } = req.file;
    let image = null;
    if (path) {
      image = await cloudinary.uploader.upload(path, {
        folder: "profilePics",
        use_filename: true,
      });
    }

    const getUser = await Profile.findOne({ userId: userId });

    if (getUser) {
      if (getUser.cloudinary_id.length != 0) {
        if (image) {
          await cloudinary.uploader.destroy(getUser.cloudinary_id);
        }
      }
      await Profile.findOneAndUpdate(
        { userId: userId },
        {
          $set: {
            firstName: firstName || getUser.firstName,
            lastName: lastName || getUser.lastName,
            description: description || getUser.description,
            cloudinary_id: image.public_id || getUser.cloudinary_id,
            company: company || getUser.company,
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
        cloudinary_id: image && image.public_id,
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
