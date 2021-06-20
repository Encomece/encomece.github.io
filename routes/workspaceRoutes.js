const { Router } = require("express");
const fileUpload = require("../config/attachment_multer");

const workspaceController = require("../controllers/workspaceController");

const router = Router();

//routes

//Base url -->  /api/dashboard/workspace

router.get(
  "/client/allProjects/:userId",
  workspaceController.get_projects_client
); //get all projects-client
router.get("/ve/allProjects/:userId", workspaceController.get_projects_ve); //get all projects-ve
router.get(
  "/client/projectDetails/:token",
  workspaceController.get_projectDetails_client
); //for sending the list of tasks to client
router.get(
  "/ve/projectDetails/:token",
  workspaceController.get_projectDetails_ve
);
router.post("/project", workspaceController.post_project);
router.post(
  "/project/task",
  fileUpload.single("attachment"),
  workspaceController.post_tasks
);
router.post("/project/comments", workspaceController.post_comment); //for adding a new comment to a task
router.get("/allUsers", workspaceController.get_allUsers); //Getting all user
router.get("/allUsers/:userId", workspaceController.get_userById); //Getting user by id
router.post("/sendTask", workspaceController.send_Task_to_VE); //sending taskDetails to VE
router.get("/allUsers/tasks/:id", workspaceController.get_taskById); // Get task by id ;
router.post("/VE/addTask", workspaceController.add_VE_task); //add VE task

router.get("/VE/task/:id", workspaceController.get_All_VE_tasks); //get all VE tasks ;
router.get("/VE/data", workspaceController.get_All_VE); //Get all VE data
router.post("/issue", workspaceController.post_issue_admin); //send client issue to admin

module.exports = router;
