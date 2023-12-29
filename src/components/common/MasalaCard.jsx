import React from "react";

function MasalaCard(props) {
  console.log("props", props);
  return (
    <div style={{ overflow: "hidden" }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img
        src={props.imgURL}
        alt="India ke Masale!"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "350px",
          borderRadius: "24px",
        }}
      />
      <div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            {props.nutrients.map(function (value, index, array) {
              return (
                <tr key={index} style={{ borderBottom: "solid 1px gray" }}>
                  <td style={{ padding: "4px" }}>{value.title}</td>
                  <td
                    style={{
                      padding: "4px",
                      textAlign: "right",
                    }}
                  >
                    {value.value}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default MasalaCard;
