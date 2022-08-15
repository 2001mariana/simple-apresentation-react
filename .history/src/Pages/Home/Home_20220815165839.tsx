
import logo from '../assets/images/logo.svg';

import './Home.css';

function Home() {
  return (
    <>
    <Header />
    <div className="Home">
        <img src={logo} className="Home__logo" alt="logo" />
        <p>Eu sou uma aplicação React</p>
    </div>
    </>
  );
}

export default Home;