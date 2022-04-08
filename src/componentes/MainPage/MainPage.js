import React, { useState } from 'react'
import styles from './MainPage.module.css'
import img from './MainPage.png'
import btn from './btn.png'





function MainPage() {




  return (

    <div className={styles.main}>

      {/* 메인화면 이미지 */}
      <div className={styles.img}>
        <img src={img} />
      </div>

      {/* 검색창  */}
      <div className={styles.searchDiv}>
        <div className={styles.search}>
          <form className={styles.search}>
            <input type='text' className={styles.searchText} placeholder='소환사명...'
            />
            <button type='submit' className={styles.searchBtn}>
              <img src={btn} className={styles.searchImg} />
            </button>
          </form>
        </div>
        {

        }
      </div>

      <div>

      </div>

    </div>
  )
}

export default MainPage;