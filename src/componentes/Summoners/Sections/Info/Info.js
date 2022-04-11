import React, { useState, useEffect } from 'react'
import styles from './Info.module.css'
import test from './test.jpg'



function Info(props) {

  
  
  
  useEffect(() => {
    console.log(props.info)
    // setInfo(props.info)
    
  }, [])

  const renderSeasonRank = props.info.seasonRank.map((info, index) => {
    return (
      <li key={index} className={styles.info}>
      <div style={{ position: 'relative' }}>
        <b style={{ fontWeight: 'bold' }}>
          S{info.Season}
        </b>
        {info.Rank}
      </div>
    </li>
    )
  })


  return (
    
    <div className={styles.infoD}>
      {/* 시즌별 티어정보 */}
      <ul className={styles.info}>
      {renderSeasonRank}
      </ul>
      {/* 아이콘 및 레벨 */}
      <div className={styles.face}>
        <div style={{position: 'relative'}}>
        <img className={styles.face}

         src={test} alt={'아 없다고합니다.'}/>
        <span className={styles.face} style={{background: {}}}>{props.info.profile.level}</span>

        {/* <span>{info.profile.img}</span>
        <span>{info.profile.level}</span>
        <span>{info.profile.nickName}</span> */}
        
        </div>
      </div>
    </div>
  )
}

export default Info