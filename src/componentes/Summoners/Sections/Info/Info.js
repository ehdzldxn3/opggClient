import React, { useState, useEffect } from 'react'
import styles from './Info.module.css'




function Info(props) {

  const info = props.info;
  
  


  const renderSeasonTier = info.resPart1.seasonTier.map((info, index) => {
    return (
      <li key={index} className={styles.info}>
      <div style={{ position: 'relative' }}>
        <b style={{ fontWeight: 'bold' }}>
          S{info.season} 
        </b>
         {' '+info.tier}
      </div>
    </li>
    )
  })


  return (
    
    <div className={styles.infoD}>
      {/* 시즌별 티어정보 */}
      <ul className={styles.info}>
      {renderSeasonTier}
      </ul>

      {/* 아이콘 및 레벨 */}
      <div className={styles.face}>
        <div style={{position: 'relative'}}>
        <img className={styles.face}

         src={info.resPart1.profileIconUrl} alt={'아 없다고합니다.'}/>
        <span className={styles.face} style={{background: {}}}>{info.resPart1.summonerLevel}</span>        
        </div>
      </div>

    </div>
  )
}

export default Info