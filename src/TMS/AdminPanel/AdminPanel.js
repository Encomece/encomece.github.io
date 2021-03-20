import React, { useState, useEffect, useContext, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import { TaskContext } from "../context/taskContext";
import "./AdminPanel.css";

import BrandLogo from "../assets/img/logo.png";

const AdminPanel = () => {
  const { allUsers, setAllUsersHandler } = useContext(TaskContext);
  const history = useHistory();

  useEffect(() => {
    const cb = async () => {
      const response = await fetch(
        process.env.REACT_APP_BASE_URL + "/dashboard/workspace/allUsers"
      );
      const json = await response.json();
      setAllUsersHandler(json);
    };
    cb();
  }, []);

  const detailsHandler = (id) => {
    history.push("/admin/" + id);
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    tableHeader: {
      fontSize: "30px",
    },
  });

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={BrandLogo} alt="brand-logo" width="150" />
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <div className="adminPanel">
        <div className="adminPanel-comp-container">
          <div className="adminpanel-heading">Admin Panel</div>
          <div className="dash-myTask-container">
            <div className="dash-myTask-heading">
              <div className="dash-myTask-container-heading">
                <span>Client Details</span>
              </div>
            </div>
            <div className="dash-myTask-tasks-container">
              <div className="dash-myTask-tablehead">
                <span>Client Name</span>
                <span className="dash-myTask-tablehead-col3">Client Email</span>
                <span style={{ textAlign: "center" }}>Total Active Task</span>
                <span style={{ textAlign: "center" }}>Details</span>
              </div>
              <div className="dash-myTasks-task-container">
                {allUsers.map((user, index) => {
                  return (
                    <div className="dash-myTasks-task-container-contents">
                      <div className="dash-myTasks-task-container-col col1">
                        {user.userName}
                      </div>
                      <div className="dash-myTasks-task-container-col col3">
                        {user.userEmail}
                      </div>
                      <div
                        className="dash-myTasks-task-container-col col2"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {user.tasks.length}
                      </div>
                      <div
                        className="dash-myTasks-task-container-col col4"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          onClick={() => detailsHandler(user.userId)}
                          style={{ cursor: "pointer" }}
                        >
                          Click to get Details
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
