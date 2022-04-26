import React from 'react'
import styles from './TeamRank.module.css'

function TeamRank(props) {
    const tr = props.teamRank
    console.log(tr)

  return (
    <div className={styles.tr}>
        <div className={styles.tr2}>

            {/* 티어 이미지 */}
            <div className={styles.Medal}>
                <div style={{position: 'relative'}}>
                    <img className={styles.trImg} src={tr.img}/>
                </div>
            </div>

            {/* 팀랭크 정보 */}
            <div className={styles.info}>
                <div className={styles.type}>자유랭크</div>
                <div className={styles.tier_rank}>{tr.tier}</div>
                <div>
                    <span className={styles.lp}>{tr.lp} LP </span>
                    /  
                    <span>
                        {' ' + tr.win}승  {tr.lose}패
                        <br/>
                        승률 {tr.winPer}%
                    </span>
                </div>
            </div>


        </div>
    </div>
  )
}

export default TeamRank