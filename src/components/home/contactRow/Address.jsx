import React from "react";
import AddressItem from "./AddressItem";

function Address() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "#fff3e0",
        padding: "32px",
      }}
    >
      <AddressItem
        iconClass="fa-regular fa-compass"
        title="Address"
        desc="Lorem ipsum dolor sit amet."
      />
      <AddressItem
        iconClass="fa-solid fa-phone"
        title="Phone"
        desc="Lorem ipsum dolor sit amet."
      />
      <AddressItem
        iconClass="fa-solid fa-envelope-open-text"
        title="Email"
        desc="Lorem ipsum dolor sit amet."
      />

      <div>
        <iframe
          width="100%"
          height="200"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=yogi%20chowk%20Surat+(Lope%20Multimedia%20Institute)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://www.krankenversicherungsvergleich.at/">
          private Krankenversicherung
        </a>
      </div>
    </div>
  );
}

export default Address;
