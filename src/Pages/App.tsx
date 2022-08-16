import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from '../Components/Header/Header'
import Contato from './Contato/Contato'
import Home from './Home/Home'
import NotFound from './NotFound/NotFouns'
import Produtos from './Produtos/Produtos'
import Sobre from './Sobre/Sobre'

import './App.css'

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
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
