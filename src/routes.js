//Authentication--------------------------------------------------
import Authentication from "./TMS/Authentication/Pages/Authentication";
import GoogleLogin from "./TMS/Authentication/Pages/GoogleLogin";
import ConfirmEmail from "./TMS/Authentication/Pages/ConfirmEmail";
import ResetPswd from "./TMS/Authentication/Pages/ResetPswd";

//Dashboard------------------------------------------------
import DashLayout from "./TMS/Dashboard/layouts/DashLayout";
import VE_Workspace from "./TMS/Dashboard/views/Workspace/VE_Workspace";

//AdminPanel---------------------------------------
import AdminPanel from "./TMS/AdminPanel/AdminPanel";
import AdminTaskTable from "./TMS/AdminPanel/AdminTaskTable";

//Encomecs views----------------------------------------------------------
import Home from "./Encomece/views/Home";
import StartupProgram from "./Encomece/views/StartupProgram";
import VEProgram from "./Encomece/views/VEProgram";

const routes = [
  {
    path: "/ve_program",
    component: VEProgram,
  },
  {
    path: "/startup_program",
    component: StartupProgram,
  },
  {
    path: "/auth/reset/:resetToken",
    component: ResetPswd,
  },
  {
    path: "/auth/confirm/:id",
    component: ConfirmEmail,
  },
  {
    path: "/auth/:token",
    component: GoogleLogin,
  },
  {
    path: "/admin/:userId",
    component: AdminTaskTable,
  },
  {
    path: "/auth",
    component: Authentication,
  },
  {
    path: "/admin",
    component: AdminPanel,
  },
  {
    path: "/VE/dash/:id",
    component: VE_Workspace,
  },
  {
    path: "/dash",
    component: DashLayout,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
