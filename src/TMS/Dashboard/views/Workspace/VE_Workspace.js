import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useHttpClient } from "../../../customHooks/http-hook";
import { AuthContext } from "../../../context/authContext";
import { toast } from "react-toastify";
import LoadingPage from "../../assets/jss/LoadingPage";

const VE_Workspace = () => {
  const auth = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();
  const { id } = useParams();
  const ids = id.split("=");
  const [taskData, setTaskData] = useState({
    clientId: ids[0],
    projectId: ids[1],
    userId: ids[2],
  });

  const history = useHistory();

  useEffect(() => {
    sendRequest(
      process.env.REACT_APP_BASE_URL + "/dashboard/workspace/VE/addTask",
      "POST",
      JSON.stringify(taskData),
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        toast.success(res.message, { position: "top-right" });
        if (res.message) {
          history.push("/dash");
        }
      })
      .catch((err) => console.log(err));
  }, [taskData]);

  return (
    <div>
      <LoadingPage />
    </div>
  );
};

export default VE_Workspace;
