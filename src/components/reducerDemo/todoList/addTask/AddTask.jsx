import React, { useState } from "react";
import styles from "../../../../styles/todoList/addTask.module.css";
import { ACTIONS } from "../TodoList";

function AddTask(props) {
  const { dispatch } = props;
  const [task, setTask] = useState("");

  function handleAdd() {
    dispatch({
      type: ACTIONS.ADD,
      payload: { id: Date.now(), task, isCompleted: false },
    });
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div className={styles.addTaskContainer}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTask;
