
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/main/MainPage';
import { LayoutComponent } from './layout/layout/LayoutComponent';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { LoginPage } from './pages/login/LoginPage';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
      <LayoutComponent>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
        </Routes>
      </LayoutComponent>
  );
}



export default App;
