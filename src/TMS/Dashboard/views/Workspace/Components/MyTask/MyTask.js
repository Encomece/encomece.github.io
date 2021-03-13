import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../css/style.css";

//Context
import { AuthContext } from "../../../../../context/authContext";
import { TaskContext } from "../../../../../context/taskContext";

//Custom Hooks
import { useHttpClient } from "../../../../../customHooks/http-hook";

const MyTask = () => {
  const histoty = useHistory();

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
    sendRequest(
      process.env.REACT_APP_BASE_URL +
        "/dashboard/workspace/allTasks/" +
        auth.userId
    )
      .then((response) => {
        if (mounted) {
          setTasksList(response);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, [taskContext.allTasks]);

  const onClickHandler = (id) => {
    histoty.push(`/dash/${id}`);
  };

  return (
    <div className="dash-tasklist-container">
      <div className="dash-tasklist-heading">
        <span>MY PROJECTS</span>
      </div>
      {taskList && taskList.length == 0 ? (
        <div className="dash-tasklist-task-container">No Task</div>
      ) : (
        <div className="dash-tasklist-task-container">
          {taskList.map &&
            taskList.map((task, index) => {
              if (index + 1 == taskList.length) {
                return (
                  <div
                    className="dash-tasklist-task last"
                    onClick={() => onClickHandler(index)}
                  >
                    <span>PROJECT {index + 1}</span>
                  </div>
                );
              } else {
                return (
                  <div
                    className="dash-tasklist-task"
                    onClick={() => onClickHandler(index)}
                  >
                    <span>PROJECT {index + 1}</span>
                  </div>
                );
              }
            })}
        </div>
      )}
    </div>
  );
};

export default MyTask;
