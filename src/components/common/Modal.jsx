import React from "react";
import styles from "../../styles/common/modal.module.css";

function Modal(props) {
  return (
    <div className={styles.modalOuterContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.modalTitleContainer}>
          <h3>{props.title}</h3>
        </div>
        <div className={styles.modalContentContainer}>{props.component}</div>
        <div className={styles.modalFooterContainer}>
          <button onClick={props.onClose}>{props.closeBtnText}</button>
          {props.showConfirmBtn && (
            <button onClick={props.onConfirm}>{props.confirmBtnText}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
