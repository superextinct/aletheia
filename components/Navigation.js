import React, { useState } from "react"
import styles from "../styles/Navigation.module.scss";

function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.nav}>
            <a className={styles.brand} href="./index.html" onClick={() => setIsOpen(false) }>
              Aletheia
            </a>

          <button className={styles.burger} onClick={toggle} data-open={isOpen}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>

          <div className={styles.fullscreenNav}>
              <ul>
                  <li className={styles.featured}>
                        <a onClick={toggle} href="business.html">
                            Business
                        </a>
                  </li>
                  <li className={styles.featured}>
                        <a onClick={toggle} href="education.html">
                            Education
                        </a>
                  </li>
                  <li>
                        <a onClick={toggle} href="vision.html">
                            About us
                        </a>
                  </li>
                  <li>
                    <a href="#">
                        Newsroom
                    </a>
                  </li>
                  <li>
                    <a href="#">
                        Careers
                    </a>
                  </li>
              </ul>
          </div>
        </nav>
    );
}

export default Navigation