import Header from '../Components/Header/Header';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/Home" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
