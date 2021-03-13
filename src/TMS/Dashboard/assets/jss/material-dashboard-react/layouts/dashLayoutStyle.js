import { drawerWidth, transition, container } from "../../customStyle.js";

const appStyle = (theme) => ({
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
  },
  mainPanel: {
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "70%",
    marginLeft: drawerWidth,
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container,
  map: {
    marginTop: "70px",
  },
  leftSidebar: {
    width: "20%",
    backgroundColor: "grey",
  },
});

export default appStyle;
