import React, { useEffect, useState } from 'react'
import styles from './Summoners.module.css'
import { useParams } from 'react-router';
import axios from 'axios';
import Info from './Sections/Info/Info'
import Details from './Sections/Details/Details';

function Summoners() {

  //주소창에 있는 파람
  const params = useParams();


  // const [info, setinfo] = useState({})

  useEffect(() => {

    //렌더링되면서 소환사 데이터 가져오기
    // axios.get(`/clone-project-opgg/lol/test/findUserInfo/${params.nickName}`)
    //   .then(res => {
    //     setinfo(res.data)

    //   })
  }, [])

  //test
  const info =
  {
    "resPart1": {
      //소환사 랭킹
      "ladderRanking": "1954803",

      //소환사 닉네임
      "name": "초코잠보",

      //소환사 레벨  
      "summonerLevel": 234,

      //소환사 아이콘
      "profileIconUrl": "https://opgg-static.akamaized.net/images/profile_icons/profileIcon5271.jpg?image=q_auto&image=q_auto,f_webp,w_auto&v=1649837793814",

      //랭킹 상위 퍼센트 (x)
      "per" : 60.84,
      //현 시즌 티어 배경 사진 (x)
      "img" : "https://opgg-static.akamaized.net/images/borders2/silver.png",

      

      //현 시즌 티어
      "seasonTier": 
      {
        "tier": "silver",
        "season": 2021,
      },



    },
    "soloRank": 
    {
      "img": "https://opgg-static.akamaized.net/images/medals/silver_3.png?image=q_auto&image=q_auto,f_webp,w_auto&v=1650333355280",
      "tier" : 'Silver',
      'tierRank' : '3',
      'lp' : '50',
      'win' : '25',
      'lose' : '10',
      'winPer' : '57', 
    },
    'teamRank' :
    {
      'img' : 'https://opgg-static.akamaized.net/images/medals/bronze_2.png?image=q_auto&amp;image=q_auto,f_webp,w_auto&amp;v=1650885066448',
      "tier" : 'Bronze',
      'tierRank' : '2',
      'lp' : '38',
      'win' : '6',
      'lose' : '5',
      'winPer' : '55', 
    },

    //통신 여부
    "message": "SUCCESS",
    "status": 200
  }

  //전적갱신
  const summonersRefresh = () => {
    console.log(params.nickName)
  }

  const tierGraph = () => {

  }

    
    





  return (
    <div style={{background: '#ebeef1', height: '100vh',  }}>
        <Info info={info} summonersRefresh={summonersRefresh}/>
        <Details info={info}/>
    </div>
  )




}

export default Summoners