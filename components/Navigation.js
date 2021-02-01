import React, { useState } from "react"
import Link from "next/link"
import styles from "../styles/Navigation.module.scss";

function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.brand} onClick={() => setIsOpen(false) }>
              Aletheia
            </a>
          </Link>

          <button className={styles.burger} onClick={toggle} data-open={isOpen}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>

          <div className={styles.fullscreenNav}>
              <ul>
                  <li className={styles.featured}>
                      <Link href="/business">
                          <a onClick={toggle}>
                              Business
                          </a>
                      </Link>
                  </li>
                  <li className={styles.featured}>
                      <Link href="/education">
                          <a onClick={toggle}>
                              Education
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/vision">
                          <a onClick={toggle}>
                              About us
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              Newsroom
                          </a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a>
                              Careers
                          </a>
                      </Link>
                  </li>
              </ul>
          </div>
        </nav>
    );
}

export default Navigation