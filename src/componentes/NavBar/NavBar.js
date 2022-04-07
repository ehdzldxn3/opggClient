import React from 'react';
import styles from './NavBar.module.css'
import { Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <div className={styles.back}>
            <h1 className={styles.header}>
                League of Legends OP.GG Clone
            </h1>
            <Nav className={styles.nav}>
                <Nav.Item>
                    <Nav.Link href="/">
                        <p className={styles.p}>홈</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <p className={styles.p}>챔피언분석</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <p className={styles.p}>칼바람</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <p className={styles.p}>우르프</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <p className={styles.p}>통계</p>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">
                        <p className={styles.p}>랭킹</p>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <div className={styles.bottom}>
                이용약관이 어쩌고 저쩌고
            </div>
        </div>          
    )
}
export default NavBar