
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/main/MainPage';
import { LayoutComponent } from './layout/layout/LayoutComponent';

function App() {
  return (
      <LayoutComponent>
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </LayoutComponent>
  );
}



export default App;
