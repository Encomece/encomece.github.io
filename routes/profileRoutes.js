const { Router } = require("express");
const profileController = require("../controllers/profileController");
const fileUpload = require("../config/fileUpload_multer");

const router = Router();

//routes
// Base url : /api/dashboard/profile

router.post(
  "/update",
  fileUpload.single("profilePic"),
  profileController.profile_details
);
router.get("/details/:id", profileController.get_profile_details);

module.exports = router;
