import React, { useState, useEffect } from 'react'
import styles from './Details.module.css'
import SoloRank from './SoloRank/SoloRank';




function DetailsLeft(props) {

    const info = props.info;
    console.log(info)
 
  return (
    
    <div className={styles.DL}>
        <SoloRank soloRank={info.soloRank}/>
    </div>
  )
}

export default DetailsLeft