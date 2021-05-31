const { Router } = require("express");
const profileController = require("../controllers/profileController");

const router = Router();

//routes
// Base url : /api/dashboard/profile

router.post("/update", profileController.profile_details);
router.get("/details/:id", profileController.get_profile_details);

module.exports = router;
