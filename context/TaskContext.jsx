import React, { createContext, useReducer, useContext, useEffect, useMemo, useCallback, useState } from "react";
import taskReducer, { initialState } from "../reducers/taskReducer";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [modalTaskId, setModalTaskId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SET_TASKS", payload: data });
      });
  }, []);

  const tasksCount = useMemo(() => state.tasks.length, [state.tasks]);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
    setModalTaskId(null);
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch, tasksCount, deleteTask, modalTaskId, setModalTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);