import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import SecondNavBar from './componentes/SecondNavBar/SecondNavBar'
import ThirdNavBar from './componentes/ThirdNavBar/ThirdNavBar'
import MainPage from './componentes/MainPage/MainPage'


function App() {
  return (
    
    <BrowserRouter>
      
      <NavBar />
      <SecondNavBar/>
      <ThirdNavBar/>
        
      <Routes>
           
        {/* 메인페이지 */}
        <Route path='/' element={<MainPage/>} />


      </Routes>
      {/* </div> */}
    </BrowserRouter>

  );
}

export default App;
