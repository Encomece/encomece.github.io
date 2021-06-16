import React, { useContext } from "react";

//Material-ui core componets
import { Button, LinearProgress } from "@material-ui/core";

//Formik Components
import { Formik, Form, Field } from "formik"; //Using Formik
import { Autocomplete } from "formik-material-ui-lab";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import MuiTextField from "@material-ui/core/TextField";

import { ProjectType } from "./ProjectData/ProjectType";
import { useHttpClient } from "../../../../customHooks/http-hook";
import { AuthContext } from "../../../../context/authContext";
import { TaskContext } from "../../../../context/taskContext";

//styles
import "../css/style.css";

const FormContainer = () => {
  //custom-hook for all http work
  const { sendRequest, isLoading } = useHttpClient();

  //context
  const auth = useContext(AuthContext);
  const taskContext = useContext(TaskContext);

  //form initial-values
  const initialValues = {
    projectName: "",
    projectType: "none",
  };

  //Vaidation the input
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("Add a Project"),
  });

  //Submitting the form
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(async () => {
      setSubmitting(false);
      const formData = JSON.stringify(values, null, 2);
      console.log(formData);
      var data = JSON.parse(formData);
      var extraData = {
        userId: auth.userId,
        userName: auth.userName,
        userEmail: auth.userEmail,
      };
      data = { ...data, ...extraData };
      data = JSON.stringify(data);
      console.log(data);
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BASE_URL + "/dashboard/workspace/project",
          "POST",
          data,
          {
            "Content-Type": "application/json",
          }
        );
        if (response.ok) {
          taskContext.setAllTasksHandler(response.task);
          console.log(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <div className="dash-createTask-formContainer">
            <div className="dash-createTask-feild">
              <Field
                component={TextField}
                name="projectName"
                type="text"
                label="Project Heading"
                style={{ width: "40%" }}
              />
            </div>
            <div className="dash-createTask-feild">
              <Field
                component={Autocomplete}
                name="projectType"
                options={ProjectType}
                style={{ width: "40%" }}
                renderInput={(params) => (
                  <MuiTextField
                    {...params}
                    helperText={touched["projectType"] && errors["projectType"]}
                    label="Project Type"
                  />
                )}
              />
            </div>
            {/* <div style={{ paddingLeft: "10px" }}>
                <input
                  type="file"
                  onChange={onFileChangeHandler}
                  accept=".png, .jpg, .jpeg, .pdf"
                  name="file"
                  style={{ display: "none" }}
                  id="attachment"
                />
                <h7 style={{ color: "grey" }}>Add an attachment</h7>
                <label htmlFor="attachment">
                  <AttachmentIcon fontSize="large" style={{ color: "grey" }} />
                </label>
                {file && (
                  <div style={{ color: "grey" }}>
                    <strong>Selected file:</strong>{" "}
                    {file.name.length > 10
                      ? file.name.slice(0, 10) + "..."
                      : file.name}
                    <ClearIcon onClick={() => setFile(null)} />
                  </div>
                )}
              </div> */}
            <div className="dash-createTask-button">
              {isLoading && (
                <>
                  <br />
                  <LinearProgress />
                  <br />
                </>
              )}
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                style={{
                  margin: "5px 0 0 0",
                  borderRadius: "5px",
                  width: "130px",
                  backgroundColor: "#091D55",
                }}
              >
                Add Task
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
