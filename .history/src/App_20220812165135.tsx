import logo from './logo.svg';

import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
    <Header links={} />
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Eu sou uma aplicação React</p>
    </div>
    </>
  );
}

export default App;
