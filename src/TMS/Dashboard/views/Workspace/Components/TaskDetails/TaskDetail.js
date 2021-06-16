import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik"; //Using Formik
import { TextField } from "formik-material-ui";
//Material-ui-core components
import { LinearProgress, Box, Button } from "@material-ui/core";

import BackLogo from "../../../../../assets/img/backLogo.svg";

//Context
import { AuthContext } from "../../../../../context/authContext";
import { TaskContext } from "../../../../../context/taskContext";

//Custom Hooks
import { useHttpClient } from "../../../../../customHooks/http-hook";

//css
import "../../css/style.css";

const TaskDetail = () => {
  //Using context for state update
  const auth = useContext(AuthContext);
  const taskContext = useContext(TaskContext);
  const history = useHistory();

  //States
  const [taskList, setTasksList] = useState([]);
  const [projectDetails, setProjectDetails] = useState(null);

  //Custom hook for all http work
  const { sendRequest, isLoading } = useHttpClient();

  const { projectId } = useParams();

  //Converting Date-String to human readable
  const dateHandler = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    let mounted = true;
    const token = auth.userId + "=" + projectId;
    var reqLink =
      process.env.REACT_APP_BASE_URL +
      "/dashboard/workspace/projectDetails/" +
      token;
    sendRequest(reqLink)
      .then((response) => {
        if (mounted) {
          console.log(response);
          setProjectDetails(response);
          setTasksList(response.tasks);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, [taskContext.allTasks, taskContext.allComments]);

  //Post request to mongodb for storing comments
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      const formData = JSON.stringify(values, null, 2);
      var data = JSON.parse(formData);
      data = {
        ...data,
        userId: auth.userId,
        person: auth.userName,
        projectId: projectDetails.projectId,
        userId: auth.userId,
      };
      if (auth.userType == "client") {
        data = {
          ...data,
          assigned_VE_Id: projectDetails.veId,
          type: "client",
        };
      } else {
        data = {
          ...data,
          assignUserId: projectDetails.assignUserId,
          type: "ve",
        };
      }
      data = JSON.stringify(data);
      console.log(data);
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/dashboard/workspace/task/comments",
        "POST",
        data,
        {
          "Content-Type": "application/json",
        }
      )
        .then((response) => taskContext.commentsHandler(response.comments))
        .catch((err) => console.log(err));
    }, 500);
  };

  const goBackHandler = () => {
    history.push("/dash/workspace");
  };

  return (
    <div className="dash-taskdetail-container">
      <>
        <div className="dash-taskdetail-heading">
          <span>
            <img src={BackLogo} alt="back" onClick={goBackHandler} />
          </span>
          <span>{!!projectDetails && projectDetails.projectName}</span>
        </div>
        <div className="dash-taskdetail-tasks-container">
          <div className="dash-taskdetail-tablehead">
            <span>Task Name</span>
            <span>Description</span>
            <span className="dash-taskdetail-tablehead-col3">Status</span>
            <span style={{ textAlign: "center" }}>Due Date</span>
            <span style={{ textAlign: "center" }}>
              Assigned {auth.userType === "client" ? "To" : "By"}
            </span>
          </div>
          <div className="dash-taskdetail-task-container">
            {taskList.map((task, index) => {
              return (
                <div className="dash-taskdetail-task-container-contents">
                  <div className="dash-taskdetail-task-container-col col1">
                    {task.taskName}
                  </div>
                  <div className="dash-taskdetail-task-container-col col2">
                    {task.taskDescription}
                  </div>
                  <div
                    className={`dash-taskdetail-task-container-col col3 ${
                      task.status ? "active" : "not-active"
                    }`}
                  >
                    {task.status ? "Active" : "Not Active"}
                  </div>
                  <div className="dash-taskdetail-task-container-col col4">
                    {dateHandler(task.dueDate)}
                  </div>
                  <div className="dash-taskdetail-task-container-col col5">
                    {auth.userType === "client"
                      ? projectDetails.veName || "Not Assigned"
                      : task.assignUserName || "Not Assigned"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="dash-taskcomment-container">
          <div className="dash-taskcomment-heading">
            <span>Start Converstation</span>
          </div>
          <div className="dash-taskcomment-comment-container">
            <div className="dash-taskcomment-table-head">
              <span>User</span>
              <span>Comment</span>
              <span style={{ textAlign: "center" }}>Time</span>
            </div>
            <div className="dash-taskcomment-table-body">
              {projectDetails &&
                projectDetails.comments.map((comments, index) => {
                  return (
                    <div className="dash-taskcomment-comment">
                      <div className="dash-taskcomment-comment-col col1">
                        {comments.person}
                      </div>
                      <div className="dash-taskcomment-comment-col col2">
                        {comments.comment}
                      </div>
                      <div className="dash-taskcomment-comment-col col3">
                        {dateHandler(comments.time)}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="dash-taskComment-addComment">
              <Formik initialValues={{ comment: "" }} onSubmit={onSubmit}>
                {({ submitForm, isSubmitting }) => (
                  <Form>
                    <div className="formContainer">
                      <div className="dash-addComment">
                        <Field
                          component={TextField}
                          name="comment"
                          type="text"
                          fullWidth
                          label="Add a comment"
                        />
                      </div>
                      {isLoading && <LinearProgress color="secondary" />}
                      <Box margin={1}>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={submitForm}
                          style={{ margin: "10px 0 0 0" }}
                        >
                          Comment
                        </Button>
                      </Box>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default TaskDetail;
