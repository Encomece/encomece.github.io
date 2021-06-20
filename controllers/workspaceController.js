const Workspace = require("../models/Workspace");
const VE_Workspace = require("../models/VE_Workspace");
const UsersModel = require("../models/User");
const emailTemplates = require("../config/nodemailerMailTemps");
const sendEmail = require("../config/nodemailer"); //nodemailer
const cloudinary = require("../config/cloudinary");

//getting all projects-client
module.exports.get_projects_client = async (req, res) => {
  const { userId } = req.params;
  try {
    const userProjects = await Workspace.findOne({ userId: userId });
    if (userProjects) res.json(userProjects.projects);
    else res.json({ message: "No Projects Available", ok: false });
  } catch (err) {
    res.json({ err });
  }
};

//getting all projects-ve
module.exports.get_projects_ve = async (req, res) => {
  const { userId } = req.params;
  try {
    const veProjects = await VE_Workspace.findOne({ userId });
    if (veProjects) res.json(veProjects.projects);
    else res.json({ message: "No Projects Available", ok: false });
  } catch (err) {
    console.log(err);
    res.json({ ...err });
  }
};

//getting project details-client
module.exports.get_projectDetails_client = async (req, res) => {
  const { token } = req.params;
  const query = token.split("=");
  const userId = query[0];
  const projectId = query[1];
  try {
    const getClient = await Workspace.findOne({ userId });
    if (getClient) {
      const reqProjectIdx = getClient.projects
        .map((project) => project.projectId)
        .indexOf(projectId);
      const reqProject = getClient.projects[reqProjectIdx];
      res.json(reqProject);
    } else res.json({ message: "Project Details Not found", ok: false });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

//get project details - ve
module.exports.get_projectDetails_ve = async (req, res) => {
  const { token } = req.params;
  const query = token.split("=");
  const userId = query[0];
  const projectId = query[1];
  try {
    const getVE = await VE_Workspace.findOne({ userId });
    if (getVE) {
      const reqIndex = getVE.projects
        .map((project) => project.projectId)
        .indexOf(projectId);
      const reqProject = getVE.projects[reqIndex];
      res.json(reqProject);
    } else res.json({ message: "Projects Details Not found", ok: false });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

//adding a project
module.exports.post_project = async (req, res) => {
  const { userId, userName, userEmail, projectName, projectType } = req.body;
  try {
    const newProjectDetails = {
      projectName,
      projectType,
    };

    const existingUser = await Workspace.findOne({ userId });
    if (existingUser) {
      existingUser.projects.push(newProjectDetails);
      existingUser.save();
    } else {
      const newProject = await new Workspace({
        userId,
        userName,
        userEmail,
        projects: [newProjectDetails],
      });
      await newProject.save();
    }
    res.status(201).json({ message: "Project Created", ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Project Creation failed",
      error: { ...error },
      ok: false,
    });
  }
};

//adding a task
module.exports.post_tasks = async (req, res) => {
  try {
    const { taskName, taskDescription, userId, projectId } = req.body;
    const { path } = req.file;

    const getProject = await Workspace.findOne({
      userId: userId,
    });

    const reqProjectIdx = getProject.projects
      .map((project) => project.projectId)
      .indexOf(projectId);

    let attach = null;
    if (path) {
      attach = await cloudinary.uploader.upload(path, {
        folder: "attachments",
        use_filename: true,
      });
    }

    const newTask = {
      taskName,
      taskDescription,
      attachment: attach && attach.public_id,
    };
    getProject.projects[reqProjectIdx].tasks.push(newTask);
    getProject.save();
    res.status(201).json({
      message: "Task created successfully",
      ok: true,
      tasks: getProject.projects[reqProjectIdx].tasks,
    });
  } catch (err) {
    console.log(err);
    res.json({ message: "Task Creation Failed", error: { ...err }, ok: false });
  }
};

//Adding a comment (POST)
module.exports.post_comment = async (req, res) => {
  let { type } = req.body;
  if (type === "VE") {
    const { comment, projectId, userId, person, veId } = req.body;
    const newComment = {
      person: person,
      comment: comment,
      time: Date.now(),
    };
    try {
      const getVE = await VE_Workspace.findOne({ userId: userId });
      const reqProjectIdx = getVE.projects
        .map((project) => project.projectId)
        .indexOf(projectId);
      getVE.projects[reqProjectIdx].comments.push(newComment);
      getVE.save();
      const getClient = await Workspace.findOne({ userId: veId });
      const reqProjectIdx_client = getClient.projects
        .map((project) => project.projectId)
        .indexOf(projectId);
      getClient.projects[reqProjectIdx_client].comments.push(newComment);
      getClient.save();

      res.json({
        message: "New Comment Added",
        comments: newComment,
        ok: true,
      });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  } else if (type === "client") {
    const { comment, projectId, userId, veId, person } = req.body;
    const newComment = {
      person: person,
      comment: comment,
      time: Date.now(),
    };
    try {
      const getUser = await Workspace.findOne({ userId });
      const reqProjectIdx = getUser.projects
        .map((project) => project.projectId)
        .indexOf(projectId);
      getUser.projects[reqProjectIdx].comments.push(newComment);
      getUser.save();

      if (veId) {
        const getVE = await VE_Workspace.findOne({ userId: veId });
        const reqProjectIdx = getVE.projects
          .map((project) => project.projectId)
          .indexOf(projectId);
        getVE.projects[reqProjectIdx].comments.push(newComment);
        getVE.save();
      }

      res.json({
        message: "New Comment Added",
        ok: true,
        comments: getUser.projects[reqProjectIdx].comments,
      });
    } catch (err) {
      console.log(err);
      res.json({ ...err, ok: false });
    }
  }
};

//Getting all the users data for admin panel
module.exports.get_allUsers = async (req, res, next) => {
  try {
    const allUsers = await Workspace.find({});
    if (allUsers) {
      res.json(allUsers);
    } else {
      res.json({ message: "No Users found", ok: false });
    }
  } catch (err) {
    res.json(err);
  }
};

//Get user Details by id
module.exports.get_userById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await Workspace.findOne({ userId: userId });
    if (user) {
      res.json(user);
    } else {
      res.json({ message: "User Not Found", ok: false });
    }
  } catch (err) {
    res.json(err);
  }
};

//Get task by userId and taskId
module.exports.get_taskById = async (req, res, next) => {
  const { id } = req.params;
  const ids = id.split("=");
  const userId = ids[0];
  const taskId = ids[1];
  try {
    const user = await Workspace.findOne({
      userId: userId,
      "tasks.taskId": taskId,
    });
    if (user) {
      let taskArray = user.tasks;
      const task = taskArray.filter((task) => task.taskId === taskId);
      if (task) {
        res.json(task[0]);
      } else {
        res.json({ message: "Task Not found" });
      }
    } else {
      res.json({ message: "User Not available" });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

//Getting all VE
module.exports.get_All_VE = async (req, res, next) => {
  try {
    const users = await UsersModel.User.find({ "local.userType": "VE" });
    let VE_data = [];
    if (users) {
      users.forEach((user) => {
        let userData = {
          userId: user._id,
          name: user.local.name,
          email: user.local.email,
        };
        VE_data.push(userData);
      });
      res.json(VE_data);
    } else {
      res.json({ message: "No VE data" });
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

//Sending Task Details to our VE
module.exports.send_Task_to_VE = async (req, res, next) => {
  const {
    name,
    userId,
    email,
    clientId,
    clientName,
    projectName,
    projectType,
    projectId,
  } = req.body;
  try {
    await sendEmail(
      email,
      emailTemplates.taskDetailsToVE(
        name,
        userId,
        clientId,
        clientName,
        projectName,
        projectType,
        projectId
      )
    );
    res.json({ message: "Task Assigned", ok: true });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

//Adding task of VE
module.exports.add_VE_task = async (req, res, next) => {
  const { clientId, projectId, userId } = req.body;
  try {
    const getClient = await Workspace.findOne({ userId: clientId });
    const getVE = await VE_Workspace.findOne({ userId: userId });
    const VE_details = await UsersModel.User.findById(userId);

    if (getVE) {
      var reqVEProjectIdx = getVE.projects
        .map((project) => project.projectId)
        .indexOf(projectId);

      if (reqVEProjectIdx != -1) {
        res.json({ message: "Project Already Added", ok: false });
        return;
      }
    }

    const reqProjectIdx = getClient.projects
      .map((project) => project.projectId)
      .indexOf(projectId);

    const clientDetails = {
      clientName: getClient.userName,
      clientId: getClient.userId,
      clientEmail: getClient.userEmail,
    };

    const reqProject = JSON.parse(
      JSON.stringify(getClient.projects[reqProjectIdx])
    );

    const getProject = {
      ...clientDetails,
      ...reqProject,
    };

    if (getVE) {
      getVE.projects.push(getProject);
      getVE.save();
    } else {
      const newVEDetails = {
        userId,
        userName: VE_details.local.name,
        userEmail: VE_details.local.email,
        projects: [getProject],
      };
      const newVE = await VE_Workspace.create(newVEDetails);
      await newVE.save();
    }

    getClient.projects[reqProjectIdx].veId = userId;
    getClient.projects[reqProjectIdx].veName = VE_details.local.name;
    getClient.projects[reqProjectIdx].veEmail = VE_details.local.email;
    getClient.projects[reqProjectIdx].status = true;
    getClient.save();

    res.json({ message: "Project Accepted", ok: true });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

//Getting all task of VE
module.exports.get_All_VE_tasks = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await VE_Workspace.findOne({ userId: id });
    if (user) {
      res.json(user.tasks);
    } else {
      res.json({ message: "No Task Assigned", ok: false });
    }
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

//Sending issue to admin
module.exports.post_issue_admin = async (req, res, next) => {
  const { task, issueDescription, email } = req.body;
  try {
    await sendEmail(
      process.env.MAIL_USER,
      emailTemplates.sendIssue(task, issueDescription, email)
    );
    res.json({ message: "Successfully send", ok: true });
  } catch (error) {
    res.json({ message: "Some error occcured in sending email", ok: false });
  }
};
