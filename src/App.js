import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import MainPage from './componentes/MainPage/MainPage'


function App() {
  return (
    
    <BrowserRouter>
      
      <NavBar />
      {/* <div style={{ paddingTop: '80px',}}> */}
        
      <Routes>
           
        {/* 메인페이지 */}
        <Route path='/' element={<MainPage/>} />


      </Routes>
      {/* </div> */}
    </BrowserRouter>

  );
}

export default App;
