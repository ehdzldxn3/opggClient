import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

import Info from './Sections/Info/Info'

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
        "ladderRanking": "1954803",
        "name": "초코잠보",
        "seasonTier": [
          {
            "tier": "silver",
            "season": 2021
          },
          {
            "tier": "silver",
            "season": 2020
          }
        ],
        "summonerLevel": 234,
        "profileIconUrl": "https://ddragon.leagueoflegends.com/cdn/12.6.1/img/profileicon/5271.png"
      },
      "message": "SUCCESS",
      "status": 200
    }

    
    





  return (
    <div>
      <Info info={info} />
      <div>
        다른 화면들
      </div>
    </div>
  )




}

export default Summoners