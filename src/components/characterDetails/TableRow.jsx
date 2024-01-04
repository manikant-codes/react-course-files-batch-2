import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.info.title}</td>
      <td>{props.info.value}</td>
    </tr>
  );
}

export default TableRow;
