import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
//Material-ui-core components
import { CircularProgress, Button } from "@material-ui/core";

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
  const [comments, setComments] = useState([]);
  const [projectDetails, setProjectDetails] = useState({});
  const [newComment, setNewComment] = useState("");
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
      "/dashboard/workspace/" +
      auth.userType +
      "/projectDetails/" +
      token;
    sendRequest(reqLink)
      .then((response) => {
        if (mounted) {
          console.log(response);
          setProjectDetails(response);
          setTasksList(response.tasks);
          setComments(response.comments);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, [taskContext.allTasks, taskContext.allComments]);

  //comment submitting
  const commentSubmitHandler = (e) => {
    e.preventDefault();
    setTimeout(async () => {
      var data = {
        comment: newComment,
        type: auth.userType,
        userId: auth.userId,
        person: auth.userName,
        projectId: projectDetails.projectId,
        veId: projectDetails.veId || projectDetails.clientId,
      };
      data = JSON.stringify(data);
      const reqLink =
        process.env.REACT_APP_BASE_URL +
        "/dashboard/workspace/project/comments";
      try {
        const response = await sendRequest(reqLink, "POST", data, {
          "Content-Type": "application/json",
        });
        console.log(response);
        if (response.ok) {
          console.log(response.comments);
          taskContext.commentsHandler(response.comments);
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
    // const formData = new FormData(e.target);
    // setTimeout(async () => {
    //   const data = {};
    //   formData.append("type", auth.userType);
    //   formData.append("userId", auth.userId);
    //   formData.append("person", auth.userName);
    //   formData.append("projectId", projectDetails.projectId);
    //   formData.append("veId", projectDetails.veId);
    //   const reqLink =
    //     process.env.REACT_APP_BASE_URL +
    //     "/dashboard/workspace/project/comments";
    //   try {
    //     const response = await sendRequest(reqLink, "POST", formData);
    //     console.log.apply(response);
    //     if (response.ok) {
    //       taskContext.commentsHandler(response.comment);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }, 500);
  };

  //Post request to mongodb for storing comments
  // const onSubmit = (values, { setSubmitting }) => {
  //   setTimeout(() => {
  //     setSubmitting(false);
  //     const formData = JSON.stringify(values, null, 2);
  //     var data = JSON.parse(formData);
  //     data = {
  //       ...data,
  //       userId: auth.userId,
  //       person: auth.userName,
  //       projectId: projectDetails.projectId,
  //       userId: auth.userId,
  //     };
  //     if (auth.userType == "client") {
  //       data = {
  //         ...data,
  //         assigned_VE_Id: projectDetails.veId,
  //         type: "client",
  //       };
  //     } else {
  //       data = {
  //         ...data,
  //         assignUserId: projectDetails.assignUserId,
  //         type: "ve",
  //       };
  //     }
  //     data = JSON.stringify(data);
  //     console.log(data);
  //     sendRequest(
  //       process.env.REACT_APP_BASE_URL + "/dashboard/workspace/task/comments",
  //       "POST",
  //       data,
  //       {
  //         "Content-Type": "application/json",
  //       }
  //     )
  //       .then((response) => taskContext.commentsHandler(response.comments))
  //       .catch((err) => console.log(err));
  //   }, 500);
  // };

  const goBackHandler = () => {
    history.push("/dash/workspace");
  };

  const [openModal, setOpenModal] = useState(false);

  //post request for adding task
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("projectId", projectDetails.projectId);
    formData.append("userId", auth.userId);
    setTimeout(async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BASE_URL + "/dashboard/workspace/project/task",
          "POST",
          formData
        );
        console.log(response);
        if (response.ok) {
          taskContext.setAllTasksHandler(response.tasks);
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  return (
    <>
      {openModal && (
        <form onSubmit={handleTaskSubmit}>
          <div className="modal__container">
            <div className="modal__content">
              <div style={{ textAlign: "right" }}>
                <CancelIcon
                  size={32}
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenModal(false)}
                />
              </div>
              <h1 style={{ textAlign: "center" }}>Project Work 1</h1>
              <p>Task Name</p>
              <input
                type="text"
                placeholder="Enter task details"
                name="taskName"
              />
              <p>Task Description</p>
              <input
                type="text"
                placeholder="Enter task details"
                name="taskDescription"
              />
              <p>Add Attachment</p>
              <input
                type="file"
                accept=".png, .jpeg, .jpg , .png"
                placeholder="Add an attachment here"
                name="attachment"
              />
              <hr />
              <button type="submit">Add Task</button>
            </div>
          </div>
        </form>
      )}
      <div className="dash-taskdetail-container">
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
            <span style={{ textAlign: "center" }}>Attachment</span>
            <span style={{ textAlign: "center" }}>
              Assigned {auth.userType === "client" ? "To" : "By"}
            </span>
          </div>
          <div className="dash-taskdetail-task-container">
            {taskList &&
              taskList.map((task, index) => {
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
                      <a
                        target="#"
                        href={`${process.env.REACT_APP_CLOUDINARY_URL_ATTACHMENT}${task.attachment}`}
                      >
                        View
                      </a>
                    </div>
                    <div className="dash-taskdetail-task-container-col col5">
                      {auth.userType === "client"
                        ? projectDetails.veName || "Not Assigned"
                        : projectDetails.clientName || "Not Assigned"}
                    </div>
                  </div>
                );
              })}
          </div>
          <Button
            style={{ margin: "10px 0 0 0" }}
            variant="contained"
            color="primary"
            onClick={() => setOpenModal(true)}
          >
            Add task
          </Button>
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
              {comments.map &&
                comments.map((comment, index) => {
                  return (
                    <div className="dash-taskcomment-comment">
                      <div className="dash-taskcomment-comment-col col1">
                        {comment.person}
                      </div>
                      <div className="dash-taskcomment-comment-col col2">
                        {comment.comment}
                      </div>
                      <div className="dash-taskcomment-comment-col col3">
                        {dateHandler(comment.time)}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="dash-taskComment-addComment">
              <form>
                <input
                  type="text"
                  placeholder="Add a comment"
                  name="comment"
                  className="dash-taskComment-addComment-input"
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <div style={{ display: "flex" }}>
                  {isLoading && <CircularProgress color="secondary" />}
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "10px 0 0 0" }}
                  onClick={commentSubmitHandler}
                >
                  Comment
                </Button>
              </form>
              {/* <Formik initialValues={{ comment: "" }} onSubmit={onSubmit}>
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
              </Formik> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetail;
