import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contato from './Contato/Contato'
import Home from './Home/Home'
import Produtos from './Produtos/Produtos'
import Sobre from './Sobre/Sobre'

import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
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
