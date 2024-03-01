import React from "react";
import ListItem from "./ListItem";
import styles from "../../../../styles/todoList/list.module.css";

function List(props) {
  const { todos, dispatch } = props;
  return (
    <div className={styles.listContainer}>
      {todos.map(function (todo, index) {
        return <ListItem todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}

export default List;
