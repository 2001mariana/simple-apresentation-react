import Header from '../Components/Header/Header';
import logo from '../assets/images/logo.svg';

import './App.css';

function App() {
  return (
    <>
    <Header />
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Eu sou uma aplicação React</p>
    </div>
    </>
  );
}

export default App;
