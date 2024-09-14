
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainPage } from './pages/main/MainPage';
import { Layout } from './layout/layout/Layout';

function App() {
  return (
    <Layout>
      
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
        </Routes>
    </Layout>
  );
}



export default App;
