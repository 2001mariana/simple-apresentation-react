
import logo from '../../assets/images/logo.svg';

import './Home.scss';

function Home() {
  return (
    <>
    <div className="Home">
        <img src={logo} className="Home__logo" alt="logo" />
        <p>Eu sou uma aplicação React</p>
    </div>
    </>
  );
}

export default Home;
