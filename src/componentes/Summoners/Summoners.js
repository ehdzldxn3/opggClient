import React, {useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios';

import Info from './Sections/Info/Info'

function Summoners({nickName}) {

  //주소창에 있는 파람
  const params = useParams();

  const [Check, setCheck] = useState(false)
  
  useEffect(() => {
    
    //렌더링되면서 소환사 데이터 가져오기
    // axios.get(`/clone-project-opgg/lol/findUserInfo/${params.nickName}`)
    //   .then(res => {

    //   })
    setCheck(true)
  }, [])


  const info = {
    profile : {
      img: './test.jpg',
      level : '300',
      nickName: '초코잠보',
    },
    seasonRank: [
      { Season: 2020, Rank: 'Silver' },
      { Season: 2021, Rank: 'Bronze' },
      { Season: 2022, Rank: 'Gold' },
    ],

  }






  return (

    <div>
      <Info info={info}/>
      <div>
        다른 화면들
      </div>
    </div>
  )
}

export default Summoners