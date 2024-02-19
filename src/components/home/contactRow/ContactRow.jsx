import React from "react";
import Address from "./Address";
import Form from "./Form";
import Title from "../../common/Title";

function ContactRow() {
  return (
    <div style={{ padding: "32px" }}>
      <Title
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, expedita."
      />

      <div style={{ display: "flex", gap: "16px" }}>
        <Address />
        <Form />
      </div>
    </div>
  );
}

export default ContactRow;
