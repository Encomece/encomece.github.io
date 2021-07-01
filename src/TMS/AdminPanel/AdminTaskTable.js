import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useParams } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { toast } from "react-toastify";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
} from "@material-ui/core";

// import { VE_Data } from "./VE_Data/VE_Data";
import { useHttpClient } from "../customHooks/http-hook";
import { TaskContext } from "../context/taskContext";

const AdminTaskTable = () => {
  const { userId } = useParams();
  const [projects, setProjects] = useState([]);
  const [assignedValue, setAssignedValue] = useState(null);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [select, setSelection] = useState([]);
  const { sendRequest, isLoading } = useHttpClient();

  const { VE_details } = useContext(TaskContext);

  useEffect(() => {
    const cb = async () => {
      const response = await fetch(
        process.env.REACT_APP_BASE_URL +
          "/dashboard/workspace/allUsers/" +
          userId
      );
      const json = await response.json();
      console.log(json);
      if (json) {
        const newData = json.projects;
        newData.map((data, index) => {
          data.id = index + 1;
          return data;
        });
        setProjects(newData);
        setUserName(json.userName);
        setUserEmail(json.userEmail);
      }
    };
    cb();
  }, []);

  const sendProjectDetails = async () => {
    console.log(select[0]);
    const getProjectDetails = projects.filter((task) => {
      return select[0] == task.id;
    });

    const data = {
      ...assignedValue,
      ...getProjectDetails[0],
      clientId: userId,
      clientName: userName,
      clientEmail: userEmail,
    };
    try {
      const response = await sendRequest(
        process.env.REACT_APP_BASE_URL + "/dashboard/workspace/sendTask",
        "POST",
        JSON.stringify(data),
        {
          "Content-Type": "application/json",
        }
      );
      toast.success(response.message, { position: "top-right" });
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    { field: "id", headerName: "Sl.No", width: 100 },
    { field: "projectName", headerName: "Task Name", width: 330 },
    { field: "projectType", headerName: "Task Type", width: 330 },
    { field: "veName", headerName: "Assigned To", width: 300 },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{userName}</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={projects}
          columns={columns}
          pageSize={100}
          checkboxSelection
          hideFooterPagination
          hideFooterRowCount
          hideFooterSelectedRowCount
          onSelectionModelChange={(newSelection) => {
            console.log(newSelection.selectionModel);
            setSelection(newSelection.selectionModel);
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Box margin={2}>
          <Autocomplete
            id="controlled-demo"
            value={assignedValue}
            options={VE_details}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              setAssignedValue(newValue);
            }}
            style={{ width: 400, marginTop: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="Assign To" />
            )}
          />
        </Box>
        <Box margin={2}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              color="secondary"
              style={{ marginTop: "10px" }}
              onClick={sendProjectDetails}
              variant="outlined"
            >
              Assign
            </Button>
          )}
        </Box>
      </div>
    </>
  );
};

export default AdminTaskTable;
