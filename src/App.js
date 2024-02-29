import {Route, Routes, Redirect} from 'react-router-dom'
import Home from './pages/home/Home.js';
import Login from './pages/login/Login.js';
import Signup from './pages/signup/Signup.js';
import Navbar from './components/Navbar.js';
import { useAuthContext } from './hooks/useAuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import PublicRoute from './components/PublicRoute.js'

function App() {

  const { authIsReady } = useAuthContext()
  return (
    <div className="App">
        {authIsReady && (
          <>
            <Navbar />
            <Routes>
              <Route element={<ProtectedRoute />}>
                  <Route index element={<Home/>}/>
              </Route>
                <Route element={<PublicRoute />}>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/signup' element={<Signup />}/>
                </Route>
            </Routes>
          </>
          )}
    </div>
  );
}

export default App;
    
