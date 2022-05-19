import "./util.css";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed/Feed";
import Login from "./components/Auth/Login";
import Profile from "./pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";
import { PrivateRoute } from "./components/PrivateRoutes/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((store) => store.auth);
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      {token && <Navbar />}
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }></Route>
        <Route
          path='/explore'
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }></Route>
        <Route path='/auth' element={<Login />}></Route>
        <Route
          path='/profile/:profileID'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
