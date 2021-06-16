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
import { AiOutlineCloseCircle } from "react-icons/ai";
const TaskDetail = () => {
  //Using context for state update
  const auth = useContext(AuthContext);
  const taskContext = useContext(TaskContext);
  const history = useHistory();

  //States
  const [taskList, setTasksList] = useState([]);
  const [reqTask, setReqTask] = useState([]);

  //Custom hook for all http work
  const { sendRequest, isLoading } = useHttpClient();

  const { id } = useParams();
  console.log(id)
  //Converting Date-String to human readable
  const dateHandler = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    let mounted = true;
    var reqLink =
      process.env.REACT_APP_BASE_URL +
      "/dashboard/workspace/" +
      (auth.userType === "client" ? "allProjects/" : "VE/task/") +
      auth.userId;
    sendRequest(reqLink)
      .then((response) => {
        if (mounted) {
          setTasksList(response);
        }
      })
      .catch((err) => console.log(err));
    setReqTask(taskList[id]);
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
        projectId: taskList[id].projectId,
        person: auth.userName,
      
      };
      if (auth.userType == "client") {
        data = {
          ...data,
          assigned_VE_Id: taskList[id].assigned_VE_Id,
          type: "client",
        };
      } else {
        data = {
          ...data,
          assignUserId: taskList[id].assignUserId,
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


  const [quoteName, setQuoteName] = useState("");
  const [quoteEmail, setQuoteEmail] = useState("");
  const [miniTask, setMiniTask] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [attachment, setAttachment] = useState(null);
 const formData1 = {
   taskName,
   taskDescription,
   attachment,
   userId: auth.userId,
   projectId: "60c95e02e7b4b34284c16262",
 };
    console.log(reqTask);

    
  const handleTaskSubmit = async (formData1) =>
  {
 
      setTimeout(async () => {
        try {
          const response = await sendRequest(
            process.env.REACT_APP_BASE_URL + "/dashboard/workspace/project",
            "POST",
            JSON.stringify(formData1),
            {
              "Content-Type": "application/json",
            }
          );
          console.log(response);
          if (response.ok) {
            taskContext.setAllTasksHandler(response.task);
            console.log(response.message);
           setTaskName("");
           setAttachment(null);
           setTaskDescription("");
          }
        } catch (error) {
          console.log(error);
        }
      }, 500);
   
  };
 

  return (
    <>
      {openModal ? (
        <form>
          <div className="modal__container">
            <div className="modal__content">
              <div style={{ textAlign: "right" }}>
                <AiOutlineCloseCircle
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
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <p>Task Description</p>
              <input
                type="text"
                placeholder="Enter task details"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <p>Add Attachment</p>
              <input
                type="file"
                placeholder="Paste the url of the attachment here"
                value={attachment}
                onChange={(e) => setAttachment(e.target.files[0])}
              />

              <hr />
              <button onClick={()=>handleTaskSubmit(formData1)}>Add Task</button>
            </div>
          </div>
        </form>
      ) : (
        <></>
      )}
      <div className="dash-taskdetail-container">
        {taskList[id] && (
          <>
            <div className="dash-taskdetail-heading">
              <span>
                <img src={BackLogo} alt="back" onClick={goBackHandler} />
              </span>
              <span>PROJECT {parseInt(id) + 1}</span>
            </div>
            <div className="dash-taskdetail-tasks-container">
              <div className="dash-taskdetail-tablehead">
                <span>Project Name</span>
                <span>Description</span>
                <span className="dash-taskdetail-tablehead-col3">Status</span>
                <span style={{ textAlign: "center" }}>Due Date</span>
                <span style={{ textAlign: "center" }}>
                  Assigned {auth.userType === "client" ? "To" : "By"}
                </span>
              </div>
              <div className="dash-taskdetail-task-container">
                <div className="dash-taskdetail-task-container-contents">
                  <div className="dash-taskdetail-task-container-col col1">
                    {taskList[id].projectName}
                  </div>
                  <div className="dash-taskdetail-task-container-col col2">
                    {taskList[id].projectDescription}
                  </div>
                  <div
                    className={`dash-taskdetail-task-container-col col3 ${
                      taskList[id].status ? "active" : "not-active"
                    }`}
                  >
                    {taskList[id].status ? "Active" : "Not Active"}
                  </div>
                  <div className="dash-taskdetail-task-container-col col4">
                    {dateHandler(taskList[id].dueDate)}
                  </div>
                  <div className="dash-taskdetail-task-container-col col5">
                    {auth.userType === "client"
                      ? taskList[id].assigned_VE_Name
                        ? taskList[id].assigned_VE_Name
                        : "Not Assigned"
                      : taskList[id].assignUserName
                      ? taskList[id].assignUserName
                      : "Not Assigned"}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpenModal(true)}>Add task</button>
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
                  {taskList[id].taskComments?.length>0&&taskList[id].taskComments.map(
                    (comments, index) => {
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
                    }
                  )}
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
        )}
      </div>
    </>
  );
};

export default TaskDetail;
