import React from 'react'
import styles from './SecondNavBar.module.css'

function SecondNavBar() {
  return (
    <div className={styles.div}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                  <a href='/' className={styles.a}>ํ</a>
                </li>
                <li className={styles.li}>
                  <a href='/' className={styles.a}>์นผ๋ฐ๋</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default SecondNavBar