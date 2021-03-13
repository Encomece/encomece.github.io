import React, { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

//Context
import { AuthContext } from "../../../context/authContext";

//Style
import "./Navbar.css";

const Header = () => {
  const history = useHistory();

  //Auth-Context
  const auth = useContext(AuthContext);

  //Logout
  const logoutHandler = () => {
    auth.logout();
    history.push("/auth");
  };

  /* Here we create navbar brand, based on route name */
  const location = useLocation();
  const [NavbarHeading, setNavBarHeading] = useState(
    location.pathname.split("/").pop().toUpperCase()
  );
  useEffect(() => {
    setNavBarHeading(location.pathname.split("/").pop().toUpperCase());
  }, [location]);

  if (NavbarHeading.length == 1) {
    setNavBarHeading("WORKSHOP");
  }

  return (
    <div className="navbar">
      <div className="navbarHeading">{NavbarHeading}</div>
      <div className="logoutButton">
        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
