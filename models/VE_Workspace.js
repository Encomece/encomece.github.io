const mongoose = require("mongoose");

const VE_WorkspaceSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userEmail: String,
  projects: [
    {
      projectId: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
      },
      projectName: String,
      projectType: String,
      clientId: String,
      clientName: String,
      clientEmail: String,
      tasks: [
        {
          taskId: {
            type: mongoose.Schema.Types.ObjectId,
            auto: true,
          },
          taskName: String,
          taskDescription: String,
          attachment: String,
        },
      ],
      comments: [
        {
          person: String,
          comment: String,
          time: Date,
        },
      ],
    },
  ],
});

const VE_Workspace = mongoose.model("ve_workspace", VE_WorkspaceSchema);

module.exports = VE_Workspace;
