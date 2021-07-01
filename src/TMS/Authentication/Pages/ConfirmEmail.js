import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@material-ui/core";
import { toast } from "react-toastify";

//Context
import { AuthContext } from "../../context/authContext";
import { useHttpClient } from "../../customHooks/http-hook";

const ConfirmEmail = () => {
  //Context
  const auth = useContext(AuthContext);

  //Custom-http-Hook
  const { sendRequest, isLoading } = useHttpClient();

  //Getting token from url
  const params = useParams();

  //States
  const [userId, setUserId] = useState(params.id);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const cb = async () => {
      setErrorMessage(null);
      setSuccessMessage(null);
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BASE_URL}/email/confirm/${params.id}`
        );
        console.log(response);
        if (response.ok) {
          setSuccessMessage(response.message);
          toast.success(response.message, { position: "top-right" });
          auth.login(
            response.userType,
            response.userName,
            response.userEmail,
            response.userId,
            response.token
          );
        } else {
          setErrorMessage(response.message);
          toast.warning(response.message, { position: "top-right" });
        }
      } catch (err) {
        setErrorMessage("Something went wrong");
        toast.error("Something went wrong", { position: "top-right" });
        setUserId(null);
      }
    };
    return cb();
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box margin={10}>
      {isLoading && <CircularProgress />}
      <h3>{!!successMessage ? successMessage : errorMessage}</h3>
    </Box>
  );
};

export default ConfirmEmail;
