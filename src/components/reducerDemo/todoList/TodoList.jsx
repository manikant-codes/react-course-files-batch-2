import React, { useReducer } from "react";
import TodoNav from "./TodoNav";
import styles from "../../../styles/todoList/todoList.module.css";
import List from "./list/List";
import AddTask from "./addTask/AddTask";

export const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const initialState = [
  { id: Date.now(), task: "Do something", isCompleted: false },
];

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];
    case ACTIONS.UPDATE:
      return state.map(function (value) {
        if (value.id === action.payload) {
          return { ...value, isCompleted: !value.isCompleted };
        }
        return value;
      });
    case ACTIONS.DELETE:
      return state.filter(function (value) {
        if (value.id === action.payload) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={styles.container}>
      <TodoNav />
      <AddTask dispatch={dispatch} />
      <List todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default TodoList;
