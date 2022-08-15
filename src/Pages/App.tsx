import Header from '../Components/Header/Header'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sobre from './Sobre/Sobre'
import Home from './Home/Home'
import Produtos from './Produtos/Produtos'
import Contato from './Contato/Contato'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
