import React from "react";
import { useState } from "react";

import styles from "./ContactsModal.module.scss";

const phones = ["+38093 777 55 55", "+38095 777 55 55", "+38097 777 55 55"];

const ContactsModal = () => {
  const [modalActive, setModalActive] = useState(false);

  const sendModal = () => {
    setModalActive(false);
  };

  return (
    <>
      <button
        className={styles.phoneContact}
        onClick={() => setModalActive(!modalActive)}
      >
        еще номера
      </button>
      {modalActive && (
        <>
          <div className={styles.wrapperHiden} onClick={sendModal}></div>
          <div
            className={styles.conteiner}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.wrapperPhones}>
              <p className={styles.additionalPhones}>
                Дополнительные <br /> контактные номера
              </p>
              <ul className={styles.listPhones}>
                {phones.map((item, id) => (
                  <li key={id} className={styles.phone}>
                    <a href={item}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactsModal;
