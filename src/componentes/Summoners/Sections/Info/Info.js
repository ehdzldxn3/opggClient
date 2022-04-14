import React, { useState, useEffect } from 'react'
import styles from './Info.module.css'




function Info(props) {

  const info = props.info;

  //순위 컴마 찍기
  const ranking = 
  info.resPart1.ladderRanking.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    
    <div className={styles.infoD}>

      {/* 시즌 티어정보 */}
      <ul className={styles.info}>
        <li className={styles.info}>
          <div style={{ position: 'relative' }}>
            <b style={{ fontWeight: 'bold' }}>
              S{info.resPart1.seasonTier.season}
            </b>
            {' ' + info.resPart1.seasonTier.tier}
          </div>
        </li>
      </ul>

      {/* 아이콘 및 레벨 */}
      <div className={styles.faceD}>
        <div className={styles.face_icon}>
          <div 
          className={styles.face_border_image}
          style={{backgroundImage : "url("+info.resPart1.img + ")"}}
          />
        <img className={styles.face_img}
         src={info.resPart1.profileIconUrl} alt={'이미지 불러오는데 실패 했습니다.'}/>
        <span className={styles.faceS}>{info.resPart1.summonerLevel}</span>        
        </div>
      </div>

      {/* 이름 & 전적갱신  */}
      <div className={styles.profileD}>
        <div className={styles.profileI}>
          <span className={styles.profileS}>{info.resPart1.name}</span>

          <button className={styles.profileB}>
            <img src='https://s-lol-web.op.gg/static/images/icon/common/icon-favoriteStar-off.png?v=1649837793814' className={styles.profileIMG}/>
            즐겨찾기
          </button>
          <div className={styles.profileR}>
            래더 랭킹 {" "}  
            <span className={styles.profileRS}>{ ranking }</span>
            위 (상위 {info.resPart1.per}%)
          </div>
        </div>
        <div className={styles.profileBtn}>
          <button 
          className={styles.profileRB}
          onClick={props.summonersRefresh}
          >전적갱신</button>
          <button className={styles.profileTG}>티어 그래프</button>
        </div>
      </div>
    </div>
  )
}

export default Info