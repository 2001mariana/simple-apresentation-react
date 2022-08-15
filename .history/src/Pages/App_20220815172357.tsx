import Header from '../Components/Header/Header';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Sobre/Sobre';
import Sobre from './Sobre/Sobre';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
