import React, { useState, useEffect } from 'react'
import styles from './SoloRank.module.css'




function SoloRank(props) {

    const sr = props.soloRank;
    console.log(props)

    console.log('SoloRank')
    console.log(sr)
  
  return (
    
    <div className={styles.SR}>
        <div className={styles.SR2}>
          {/* 티어 이미지 */}
          <div className={styles.tierImg}>
            <div style={{position: 'relative'}}>
              <img className={styles.srImg} src={sr.img}/>
            </div>
          </div>

          {/* 솔로랭크 정보 */}
          <div className={styles.info}>
            <div className={styles.info1}>솔로랭크</div>
            <div className={styles.info2}>{sr.tier} {sr.tierRank}</div>
          </div>
        </div>
    </div>
  )
}

export default SoloRank