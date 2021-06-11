import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./RightSidebar.css";

import { EmailOutlined } from "@material-ui/icons";
import BusinessIcon from "@material-ui/icons/Business";
import { Avatar } from "@material-ui/core";

import { AuthContext } from "../../../context/authContext";

const LeftSidebar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    auth.logout();
    history.push("/");
  };

  const [profileDetails, setProfileDetails] = useState({});

  useEffect(() => {
    fetch(
      process.env.REACT_APP_BASE_URL +
        "/dashboard/profile/details/" +
        auth.userId
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.ok === true) {
          setProfileDetails(data.details);
        } else {
          setProfileDetails({ isAvailable: "false" });
        }
      })
      .catch((err) => console.log(err));
  }, [setProfileDetails]);

  const userInfo = {
    FirstName: profileDetails.firstName || auth.userName,
    LastName: profileDetails.lastName || "",
    Description:
      profileDetails.description ||
      " Lorem ipsum dolor sit amet, conse tetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dol ore magna aliquyamerat, sed diam vol uptua. At vero eos et accusam et justo duo dolores",
    company: profileDetails.company,
    publicId:
      "https://res.cloudinary.com/modassir123/image/upload/v1623093599/" +
      profileDetails.cloudinary_id,
  };

  const updateProfileBtn = () => {
    history.push("/dash/profile");
  };

  return (
    <div className="dash-leftSidebar">
      <div className="dash-loginBtn">
        <button className="dash-logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className="dash-avatarImg">
        {<img src={userInfo.publicId} alt="person-img" /> || (
          <Avatar
            src="/broken-image.jpg"
            style={{ height: "150px", width: "150px" }}
          />
        )}
      </div>
      <div className="dash-client-name">
        {userInfo.FirstName + " " + userInfo.LastName}
      </div>
      <div className="dash-clientDetails">
        <div className="dash-client-about-heading">About</div>
        <div className="dash-client-about">{userInfo.Description}</div>
        <div className="dash-contactDetails">
          <div className="dash-contact-email">
            <EmailOutlined /> <span>{auth.userEmail}</span>
          </div>
          {userInfo.company && (
            <div className="dash-contact-phone">
              <BusinessIcon />
              <span>{userInfo.company}</span>
            </div>
          )}
        </div>
        <div className="dash-update-btn">
          <button onClick={updateProfileBtn}>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
