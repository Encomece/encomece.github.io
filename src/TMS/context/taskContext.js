import { createContext } from "react";

export const TaskContext = createContext({
  allUsers: [],
  allTasks: [],
  allProjects: [],
  allComments: [],
  VE_details: [],
  commentsHandler: () => {},
  setAllTasksHandler: () => {},
  setAllUsersHandler: () => {},
  setAllProjectsHandler: () => {},
});
