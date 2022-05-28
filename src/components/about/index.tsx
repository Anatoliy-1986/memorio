import React from "react";
import { useState } from "react";
import clsx from "clsx";

import styles from "./about.module.scss";
import ContactsModal from "./Modal/ContactsModal";
import map from "./images/map.svg";

const menu = [
  "МОНТАЖ",
  "ОПЛАТА И ДОСТАВКА",
  "ГАРАНТИИ",
  "ОТЗЫВЫ",
  "ПОРТФОЛИО",
  "КОНТАКТЫ",
];

const lang = ["UA", "RU", "ENG"];

const Header = () => {
  const [modalActive, setModalActive] = useState(!true);

  return (
    <>
      <header className={styles.menu}>
        <div className={styles.title}>
          <div className={styles.infoWrapper}>
            <h1>MEMORIO</h1>
            <p className={styles.factory}>Коростышевский гранитный завод</p>
            <div className={styles.location}>
              <img
                className={styles.mark}
                width="24px"
                height="24px"
                src={map}
                alt="mark"
              />
              <a href="#" className={styles.city}>
                Выберите город
              </a>
            </div>
          </div>
          <div className={styles.order}>
            <p className={styles.freeMiscalculation}>
              Бесплатный просчет стоимости с визуализацией в течение дня
            </p>
            <button className={styles.orderNow}>ЗАКАЗАТЬ СЕЙЧАС</button>
          </div>
          <div className={styles.contacts}>
            <div
              className={clsx(styles.wrapperLanguage, {
                [styles.active]: modalActive,
              })}
            >
              {lang.map((item, id) => (
                <button key={id} className={styles.language}>
                  {item}
                </button>
              ))}
            </div>
            <div className={styles.burgerMobile}>
              <div
                className={styles.burger}
                onClick={() => setModalActive(!modalActive)}
              >
                <span className={styles.strip}></span>
                <span className={styles.strip}></span>
                <span className={styles.strip}></span>
              </div>
              <span>
                &#128222;
                <a href="tel:0800 777 55" className={styles.phone}>
                  0800 777 55
                </a>
              </span>
            </div>
            <ContactsModal />
            <p className={styles.freeCall}>Бесплатно со всех номеров Украины</p>
          </div>
        </div>

        <nav id="menu" className={styles.navMenu}>
          <ul className={styles.list}>
            {menu.map((item, id) => (
              <li key={id} className={styles.link}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
