import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

function Form() {
  const form = useRef();

  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  }

  return (
    <form
      ref={form}
      onSubmit={sendMail}
      style={{ backgroundColor: "#fff3e0", padding: "32px", flexGrow: 1 }}
    >
      <div class="row">
        <div class="form-group col-md-6">
          <label for="name">Your Name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            required=""
          />
        </div>
        <div class="form-group col-md-6">
          <label for="name">Your Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            required=""
          />
        </div>
      </div>
      <div class="form-group">
        <label for="name">Subject</label>
        <input
          type="text"
          class="form-control"
          name="subject"
          id="subject"
          required=""
        />
      </div>
      <div class="form-group">
        <label for="name">Message</label>
        <textarea
          class="form-control"
          name="message"
          rows="10"
          required=""
        ></textarea>
      </div>
      <div class="text-center mt-4">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default Form;
