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
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              required=""
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name">Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="10"
            required=""
          ></textarea>
        </div>
        <div className="text-center mt-4">
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
