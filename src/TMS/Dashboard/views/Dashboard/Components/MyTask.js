import React from "react";
import "../../../assets/css/style.css";
import projectIcon from "../../../assets/img/projectIcon.png";

const MyTask = () => {
  const taskDetails = [
    {
      taskDescription:
        "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
      taskStatus: "Active",
      taskdueDate: "10 Feb 2021",
    },
    {
      taskDescription:
        "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
      taskStatus: "Active",
      taskdueDate: "10 Feb 2021",
    },
    {
      taskDescription:
        "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
      taskStatus: "Active",
      taskdueDate: "10 Feb 2021",
    },
    {
      taskDescription:
        "Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy",
      taskStatus: "Active",
      taskdueDate: "10 Feb 2021",
    },
  ];

  return (
    <div className="dash-myTask-container">
      <div className="dash-myTask-heading">
        <div className="dash-myTask-container-heading">
          <span>Working on Project</span>
        </div>
      </div>
      <div className="dash-myTask-tasks-container">
        <div className="dash-myTask-tablehead">
          <span>S.No</span>
          <span>Description</span>
          <span className="dash-myTask-tablehead-col3">Status</span>
          <span>Completion Date</span>
        </div>
        <hr />
        <div className="dash-myTasks-task-container">
          {taskDetails.map((task, index) => {
            return (
              <div className="dash-myTasks-task-container-contents">
                <div className="dash-myTasks-task-container-col col1">
                  <img
                    src={projectIcon}
                    alt="project-icon"
                    className="dash-myTasks-task-container-img"
                  />
                  <div className="col1-name">Project {index + 1}</div>
                </div>
                <div className="dash-myTasks-task-container-col col2">
                  {task.taskDescription}
                </div>
                <div className="dash-myTasks-task-container-col col3 active">
                  {task.taskStatus}
                </div>
                <div className="dash-myTasks-task-container-col col4">
                  {task.taskdueDate}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyTask;
