import Header from '../Components/Header/Header';
import logo from '../assets/images/logo.svg';

import './Home.css';

function Home() {
  return (
    <>
    <Header />
    <div className="Home">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Eu sou uma aplicação React</p>
    </div>
    </>
  );
}

export default Home;
