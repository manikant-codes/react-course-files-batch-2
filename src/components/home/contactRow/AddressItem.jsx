import React from "react";
import styles from "../../../styles/home/contactRow.module.css";

function AddressItem(props) {
  return (
    <div className={styles.addressItemContainer}>
      <div>
        <i
          className={props.iconClass}
          style={{ fontSize: "1.5rem", width: "auto" }}
        ></i>
      </div>
      <div className={styles.descContainer}>
        <p style={{ margin: "0px", fontSize: "1.25rem" }}>{props.title}</p>
        <p style={{ margin: "0px" }}>{props.desc}</p>
      </div>
    </div>
  );
}

export default AddressItem;
