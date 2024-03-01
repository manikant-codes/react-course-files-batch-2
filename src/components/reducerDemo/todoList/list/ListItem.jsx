import React from "react";
import styles from "../../../../styles/todoList/list.module.css";
import { ACTIONS } from "../TodoList";

function ListItem(props) {
  const { todo, dispatch } = props;
  const { id, task, isCompleted } = todo;

  function handleChange() {
    dispatch({ type: ACTIONS.UPDATE, payload: id });
  }

  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  }

  return (
    <div className={styles.listItemContainer}>
      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      <p className={styles.listItemTask}>{task}</p>
      {/* <button className={styles.btnEdit}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button> */}
      <button className={styles.btnDelete} onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default ListItem;
