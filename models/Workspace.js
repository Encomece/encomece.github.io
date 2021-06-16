const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
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
      veId: String,
      veName: String,
      veEmail: String,
      tasks: [
        {
          taskId: {
            type: mongoose.Schema.Types.ObjectId,
            auto: true,
          },
          taskName: String,
          taskDescription: String,
          attachment: String,
          status: {
            type: Boolean,
            default: false,
          },
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
const Workspace = mongoose.model("workspace", workspaceSchema);

module.exports = Workspace;
