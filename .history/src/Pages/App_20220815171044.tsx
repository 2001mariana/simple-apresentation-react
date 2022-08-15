import Header from '../Components/Header/Header';
import logo from '../assets/images/logo.svg';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path={} element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
