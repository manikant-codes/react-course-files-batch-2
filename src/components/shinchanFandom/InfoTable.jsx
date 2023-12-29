import React from "react";

function InfoTable(props) {
  return (
    <table>
      <tbody>
        {props.rows.map(function (value, index, array) {
          return (
            <tr key={index}>
              <td>{value.title}</td>
              <td>{value.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InfoTable;
