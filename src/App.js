import React from "react";

//Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//For pop-up notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Contexts-------------------------------------------
import { AuthContext } from "./TMS/context/authContext";
import { TaskContext } from "./TMS/context/taskContext";

//hooks----------------------------------------------
import { useAuth } from "./TMS/customHooks/auth-hook";
import { useTaskHook } from "./TMS/customHooks/task-hook";

import LoadingPage from "./TMS/Dashboard/assets/jss/LoadingPage";

//routes
import routes from "./routes";
import { Suspense } from "react";

const App = () => {
  //Context
  const {
    token,
    login,
    logout,
    userId,
    userType,
    userName,
    userEmail,
    googleLogin,
  } = useAuth();
  const {
    allTasks,
    setAllTasksHandler,
    allComments,
    commentsHandler,
    allUsers,
    setAllUsersHandler,
    VE_details,
    setAllProjectsHandler,
    allProjects,
  } = useTaskHook();

  //Routes
  let allRoutes = routes.map((route) => {
    if (route.path === "/dash" && !token) return;
    return <Route path={route.path} component={route.component} />;
  });

  //Render
  return (
    <>
      {/* <Notifications /> */}
      <ToastContainer />
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userName: userName,
          userEmail: userEmail,
          userId: userId,
          userType: userType,
          logout: logout,
          login: login,
          googleLogin: googleLogin,
        }}
      >
        <TaskContext.Provider
          value={{
            allTasks,
            allComments,
            setAllTasksHandler,
            commentsHandler,
            allUsers,
            VE_details,
            setAllUsersHandler,
            setAllProjectsHandler,
            allProjects,
          }}
        >
          <main>
            <Router>
              <Suspense fallback={<LoadingPage />}>
                <Switch>
                  {allRoutes}
                  <Redirect to="/" />
                </Switch>
              </Suspense>
            </Router>
          </main>
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
