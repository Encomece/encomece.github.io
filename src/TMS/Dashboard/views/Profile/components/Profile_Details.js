import React, { useState, useRef, useContext } from "react";
import Dropzone from "react-dropzone";
import { Form, Col, Button } from "react-bootstrap";
import "./Profile_Details.css";
import { Avatar } from "@material-ui/core";
import { notify } from "react-notify-toast";
import { AuthContext } from "../../../../context/authContext";
import { useHttpClient } from "../../../../customHooks/http-hook";
import ClearIcon from "@material-ui/icons/Clear";

const Profile_Details = () => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage

  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area
  //context
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const removePreviewHandler = () => {
    setPreviewSrc("");
    setFile(null);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setTimeout(() => {
      const data = new FormData(event.target);
      data.append("userId", auth.userId);
      data.append("email", auth.userEmail);
      if (file) data.append("profilePic", file);
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/dashboard/profile/update",
        "POST",
        data
      )
        .then((res) => {
          if (res.ok === true) notify.show(res.message, "success");
          else notify.show(res.message, "error");
        })
        .catch((error) => {
          console.log(error);
          notify.show(error.message, "error");
        });
    }, 500);
  };

  return (
    <React.Fragment>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Enter First Name" name="firstName" />
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Enter Last Name" name="lastName" />
          </Form.Group>
          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Company</Form.Label>
            <Form.Control placeholder="Enter Last Name" name="company" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="description">
          <Form.Label>Add a Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" />
        </Form.Group>

        <div style={{ fontSize: "16.2px", marginBottom: "10px" }}>
          Choose profile picture
        </div>
        <div className="upload-section">
          <Dropzone
            onDrop={onDrop}
            onDragEnter={() => updateBorder("over")}
            onDragLeave={() => updateBorder("leave")}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps({ className: "drop-zone" })} ref={dropRef}>
                <input {...getInputProps()} accept=".png, .jpg, .jpeg" />
                <p>Drop OR Click here to select a image</p>
                {file && (
                  <div>
                    <strong>Selected file:</strong>{" "}
                    {file.name.length > 10
                      ? file.name.slice(0, 10) + "..."
                      : file.name}
                    <ClearIcon onClick={removePreviewHandler} />
                  </div>
                )}
              </div>
            )}
          </Dropzone>
          {previewSrc ? (
            isPreviewAvailable ? (
              <div className="image-preview">
                <img className="preview-image" src={previewSrc} alt="Preview" />
              </div>
            ) : (
              <div className="preview-message">
                <p>No preview available for this file</p>
              </div>
            )
          ) : (
            <div className="preview-message">
              <Avatar
                src="/broken-image.jpg"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
          )}
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Profile_Details;
