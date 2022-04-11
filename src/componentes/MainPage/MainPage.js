import React, { useState } from 'react'
import styles from './MainPage.module.css'
import img from './MainPage.png'
import btn from './btn.png'



function MainPage(props) {


  const [NickName, setNickName] = useState('')

  const onChangeNickName = (e) => {
    setNickName(e.currentTarget.value)
  }

  const onSubmitHandler = (e) => {
    //새로고침 막는 메소드
    e.preventDefault();
    //이동하는 메소드
    window.location.replace(`/summoners/${NickName}`)
  }

  return (

    <div className={styles.main}>

      {/* 메인화면 이미지 */}
      <div className={styles.img}>
        <img src={img} />
      </div>

      {/* 검색창  */}
      <div className={styles.searchDiv}>
        <div className={styles.search}>
          <form className={styles.search} onSubmit={onSubmitHandler}>
            <input type='text'
              className={styles.searchText}
              placeholder='소환사명...'
              onChange={onChangeNickName}
              value={NickName}
            />
            <button type='submit' className={styles.searchBtn}>
              {/* <a href={`/summoners/${NickName}`}> */}
              <img src={btn} className={styles.searchImg} />
              {/* </a> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainPage;