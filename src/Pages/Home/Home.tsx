
import logo from '../../assets/images/logo.svg';

import './Home.scss';

function Home() {
  return (
    <>
    <div className="Home">
        <img src={logo} className="Home__logo" alt="logo" />
        <h2>Aplicação criada utilizando React</h2>
    </div>
    </>
  );
}

export default Home;
