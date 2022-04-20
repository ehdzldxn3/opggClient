import React, { useState, useEffect } from 'react'
import styles from './Details.module.css'
import DetailsLeft from './DetailsSections/DetailsLeft/DetailsLeft';




function Details(props) {

    const info = props.info;
  
  return (
    
    <div className={styles.Details}>
        <DetailsLeft info={info}/>
    </div>
  )
}

export default Details