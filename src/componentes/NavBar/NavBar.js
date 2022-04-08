import React, { useState } from 'react';
import styles from './NavBar.module.css'
import opgg from './opgg.png'

function NavBar() {

    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>
                <a className={styles.a} href="/"> 
                    <img src={opgg} className={styles.img}></img>
                </a>
            </h1>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <span className={styles.span}>
                            <span></span>
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar