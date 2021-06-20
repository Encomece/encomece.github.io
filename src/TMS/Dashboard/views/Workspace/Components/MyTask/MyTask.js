import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/style.css";

import ProjectIcon from "../../../../assets/img/projectIcon.webp";

//Context
import { AuthContext } from "../../../../../context/authContext";
import { TaskContext } from "../../../../../context/taskContext";

//Custom Hooks
import { useHttpClient } from "../../../../../customHooks/http-hook";

const MyTask = () => {
  const history = useHistory();

  //Using context for state update
  const auth = useContext(AuthContext);
  const taskContext = useContext(TaskContext);

  //States
  const [taskList, setTasksList] = useState([]);

  //Custom hook for all http work
  const { sendRequest, isLoading } = useHttpClient();

  //Fetching all tasks from mongodb using a custom-hook
  useEffect(() => {
    let mounted = true;
    var reqLink =
      process.env.REACT_APP_BASE_URL +
      "/dashboard/workspace/" +
      auth.userType +
      "/allProjects/" +
      auth.userId;
    sendRequest(reqLink)
      .then((response) => {
        if (mounted) {
          setTasksList(response);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, [taskContext.allTasks]);

  const onClickHandler = (projectId) => {
    history.push(`/dash/${projectId}`);
  };

  return (
    <div className="dash-tasklist-container">
      <div className="dash-tasklist-heading">
        <span>MY PROJECTS</span>
      </div>
      {taskList.message ? (
        <div className="dash-tasklist-task-container-no-task">
          <span>{taskList.message}</span>
        </div>
      ) : (
        <div className="dash-tasklist-task-container">
          {taskList.map &&
            taskList.map((task, index) => {
              return (
                <div
                  className="dash-tasklist-task last"
                  onClick={() => onClickHandler(task.projectId)}
                >
                  <img
                    src={ProjectIcon}
                    alt="project-icon"
                    className="dash-myTasks-task-container-img"
                  />
                  <span>{task.projectName}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MyTask;
