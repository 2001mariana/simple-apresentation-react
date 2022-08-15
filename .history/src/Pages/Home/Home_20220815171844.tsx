
import logo from '../../assets/images/logo.svg';

import './Home.scss';

function Home() {
  return (
    <>
    <div className="Home">
        <img src={logo} className="Home__logo" alt="logo" />
        <>Esta é a Home</>
    </div>
    </>
  );
}

export default Home;
