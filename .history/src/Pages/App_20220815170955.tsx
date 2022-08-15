import Header from '../Components/Header/Header';
import logo from '../assets/images/logo.svg';

import './App.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
              <Route path={PathRoutes.Login} element={<Login />} />
              <Route path={PathRoutes.Avaliation} element={<Avaliation />} />
              <Route
                path={PathRoutes.DeniedAccess}
                element={<DeniedAccess />}
              />
              <Route path="*" element={<NotFound />} />
              <Route
                path={PathRoutes.ViewAvaliation}
                element={<ViewAvaliation />}
              />
              <Route
                path={PathRoutes.ChangePassword}
                element={<ForgotPassword />}
              />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<RouteTransition />}>
                  <Route path={PathRoutes.Home} element={<Home />} />
                  <Route path={PathRoutes.Tags} element={<Tags />} />
                  <Route path={PathRoutes.Sessions} element={<Sessions />} />
                  <Route
                    path={PathRoutes.ConfigUser}
                    element={<ConfigUser />}
                  />
                </Route>
              </Route>
            </Routes>
    </>
  );
}

export default App;
