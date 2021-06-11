const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userEmail: String,
  tasks: [
    {
      id: Number,
      taskId: String,
      taskName: String,
      taskType: Object,
      taskDescription: String,
      dueDate: Date,
      assigned_VE_Id: String,
      assigned_VE_Name: String,
      assigned_VE_Email: String,
      attachment: String,
      status: {
        type: Boolean,
        default: false,
      },
      taskComments: [
        {
          person: String,
          comment: String,
          time: {
            type: Date,
          },
        },
      ],
    },
  ],
});
const Workspace = mongoose.model("workspace", workspaceSchema);

module.exports = Workspace;
