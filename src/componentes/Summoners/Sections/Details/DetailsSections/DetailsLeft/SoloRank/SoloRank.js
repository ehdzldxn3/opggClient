import React, { useState, useEffect } from 'react'
import styles from './SoloRank.module.css'




function SoloRank(props) {

    const sr = props.soloRank;

  
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
            <div>
              <span style={{color : 'rgb(85, 94, 94)', fontWeight: 'bold'}}>{sr.lp} LP  </span>
              / 
              <span>
                {' '+sr.win}승  {sr.lose}패
                <br/>
                승률 {sr.winPer}%
              </span>
            </div>
            <div>
              리그이름
            </div>
          </div>
        </div>
    </div>
  )
}

export default SoloRank