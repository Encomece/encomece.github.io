// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Assignment from "@material-ui/icons/Assignment";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import HomeIcon from "@material-ui/icons/Home";

// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import Workspace from "./views/Workspace/Workspace";
import HelpCenter from "./views/Help Center/HelpCenter";
import TaskDetail from "./views/Workspace/Components/TaskDetails/TaskDetail";

const dashboardRoutes = [
  {
    path: "/",
    name: "Home",
    icon: HomeIcon,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/dash",
  },
  {
    path: "/workspace",
    name: "Workspace",
    icon: Assignment,
    component: Workspace,
    layout: "/dash",
  },
  {
    path: "/support",
    name: "Help Center",
    icon: ContactSupportIcon,
    component: HelpCenter,
    layout: "/dash",
  },
  {
    path: "/:id",
    name: "",
    icon: "",
    component: TaskDetail,
    layout: "/dash",
  },
];

export default dashboardRoutes;
