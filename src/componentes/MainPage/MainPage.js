import React, { useState } from 'react'
import styles from './MainPage.module.css'
import img from './MainPage.png'
import btn from './btn.png'
import axios from 'axios'



function MainPage(props) {


  const [NickName, setNickName] = useState('')

  const onChangeNickName = (e) => {
    setNickName(e.currentTarget.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.push('/summoners');
    // axios.get(`/clone-project-opgg/lol/findUserInfo/${NickName}`)
    //   .then(res => {
        
    //     if(res.data.success) {

    //     }
        
    //   })
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
              <img src={btn} className={styles.searchImg} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainPage;