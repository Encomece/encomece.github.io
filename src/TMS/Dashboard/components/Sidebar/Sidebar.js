/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";

import Brand_logo from"../../assets/img/logo.png";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
const Drawer= React.lazy(()=> import("@material-ui/core/Drawer"));
const List= React.lazy(()=> import("@material-ui/core/List"));
const ListItem= React.lazy(()=> import("@material-ui/core/ListItem"));
const ListItemText= React.lazy(()=> import("@material-ui/core/ListItemText"));
const Icon= React.lazy(()=> import("@material-ui/core/Icon"));
const Hidden= React.lazy(()=> import("@material-ui/core/Hidden"));


const styles= React.lazy(()=> import("../../assets/jss/material-dashboard-react/components/sidebarStyle.js"));

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();

  //Getting props from routes file .
  const { color, routes } = props;

  // verifies if routeName is the one active (in browser input)
  const location = useLocation();
  function activeRoute(routeName) {
    if (routeName === "/dash/:id") {
      return false;
    }
    return location.pathname === routeName;
  }

  //Links-Navigation in Sidebar
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });
        return (
          <NavLink
            to={prop.layout === undefined ? prop.path : prop.layout + prop.path}
            className={activePro + classes.item}
            activeStyle={{ color: color }}
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  //Brand icon and Logo
  var brand = (
    <div className={classes.logo}>
      <a href="/" className={classNames(classes.logoLink)}>
        <div className={classes.logoImage}>
          <img src={Brand_logo} alt="logo" className={classes.img} />
        </div>
      </a>
    </div>
  );

  //Sidebar
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div
            className={classes.background}
            style={{
              backgroundColor: "#2234ae",
              backgroundImage:
                "linear-gradient(315deg, #2234ae 0%, #191714 74%)",
            }}
          />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          <div
            className={classes.background}
            style={{
              backgroundColor: "#2234ae",
              backgroundImage:
                "linear-gradient(315deg, #2234ae 0%, #191714 74%)",
            }}
          />
        </Drawer>
      </Hidden>
    </div>
  );
}
