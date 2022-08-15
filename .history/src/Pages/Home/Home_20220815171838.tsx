
import logo from '../../assets/images/logo.svg';

import './Home.scss';

function Home() {
  return (
    <>
    <div className="Home">
        <img src={logo} className="Home__logo" alt="logo" />
        <h1>Esta é a Home</h1>
    </div>
    </>
  );
}

export default Home;
