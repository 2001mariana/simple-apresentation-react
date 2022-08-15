import Header from '../Components/Header/Header';
import logo from '../assets/images/logo.svg';

import './App.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
              <Route path={PathRoutes.Login} element={<Login />} />
              
              </Route>
            </Routes>
    </>
  );
}

export default App;
