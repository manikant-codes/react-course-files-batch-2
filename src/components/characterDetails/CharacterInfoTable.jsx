import React from "react";
import TableRow from "./TableRow";
import styles from "../../styles/characterInfoTable.module.css";

function CharacterInfoTable(props) {
  function handleClick() {
    const table = document.getElementById("detailsPageInfoTable");
    const button = document.getElementById("toggleTableButton");
    if (!table.style.display || table.style.display === "table") {
      button.innerHTML = "Show Info";
      return (table.style.display = "none");
    }
    if (table.style.display === "none") {
      button.innerHTML = "Hide Info";
      return (table.style.display = "table");
    }
  }

  // function greetings(e, person) {
  //   console.log(e.target.innerHTML);
  //   console.log("Ram Ram! " + person);
  // }

  return (
    <div>
      <button
        style={{ width: "100%" }}
        onClick={handleClick}
        id="toggleTableButton"
      >
        Hide Info
      </button>
      <table className={styles.table} id="detailsPageInfoTable">
        <tbody>
          {props.info.map(function (row, index, array) {
            return <TableRow key={index} info={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CharacterInfoTable;
