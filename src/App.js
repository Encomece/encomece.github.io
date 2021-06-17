import React from "react";

//Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

import Notifications from "react-notify-toast"; //For pop-up notification

//Contexts-------------------------------------------
import { AuthContext } from "./TMS/context/authContext";
import { TaskContext } from "./TMS/context/taskContext";

//hooks----------------------------------------------
import { useAuth } from "./TMS/customHooks/auth-hook";
import { useTaskHook } from "./TMS/customHooks/task-hook";

//routes
import { global_routes, secure_routes } from "./routes";
import { Suspense } from "react";

// const Notifications= React.lazy(()=>import("react-notify-toast")); //For pop-up notification

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
  let routes = !!token
    ? secure_routes.map((prop) => {
        if (prop.path == "/") {
          return <Route path={prop.path} component={prop.component} exact />;
        }
        return <Route path={prop.path} component={prop.component} />;
      })
    : global_routes.map((prop) => {
        if (prop.path == "/") {
          return <Route path={prop.path} component={prop.component} exact />;
        }
        return <Route path={prop.path} component={prop.component} />;
      });

  //Render
  return (
    <>
      <Notifications />
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
              <Suspense fallback={<div>Page is Loading...</div>}>
                <Switch>{routes}</Switch>
              </Suspense>
            </Router>
          </main>
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
