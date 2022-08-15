import Header from '../Components/Header/Header';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    
    </BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
