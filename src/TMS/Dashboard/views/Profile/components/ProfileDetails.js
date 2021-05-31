import React, { useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { notify } from "react-notify-toast";
import { AuthContext } from "../../../../context/authContext";
import { useHttpClient } from "../../../../customHooks/http-hook";

const ProfileDetails = () => {
  //context
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      const data = new FormData(e.target);
      data.append("userId", auth.userId);
      data.append("email", auth.userEmail);
      const formData = JSON.stringify(Object.fromEntries(data));
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/dashboard/profile/update",
        "POST",
        formData,
        {
          "Content-Type": "application/json",
        }
      )
        .then((res) => {
          console.log(res);
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
    <div className="dash-profile-updateProfile-container">
      <Form onSubmit={onFormSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Enter First Name" name="firstName" />
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Enter Last Name" name="lastName" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="contactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control name="contactNumber" />
          </Form.Group>

          <Form.Group as={Col} controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control name="city" />
          </Form.Group>

          <Form.Group as={Col} controlId="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control name="zip" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="description">
          <Form.Label>Add a Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProfileDetails;
