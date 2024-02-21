import React, { useRef, useState } from "react";
import { sendMail } from "../../../services/apiServices";
import Modal from "../../common/Modal";
import styles from "../../../styles/home/contactRow.module.css";

function Form() {
  const formRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSumbit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await sendMail(formRef.current);
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setIsOpen(true);
    }
  }

  function onClose() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSumbit}
        className={styles.formContainer}
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
          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      {isOpen && (
        <Modal
          title={error ? "Failed!" : "Success!"}
          closeBtnText="Ok"
          component={
            error ? (
              <p>Something went wrong!</p>
            ) : (
              <p>Message sent successfully!</p>
            )
          }
          onClose={onClose}
        />
      )}
    </>
  );
}

export default Form;
