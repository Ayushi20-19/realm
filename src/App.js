import "./util.css";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed/Feed";
import Login from "./components/Auth/Login";
import Profile from "./pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoutes/PrivateRoute";
import { useSelector } from "react-redux";
import { Bookmark } from "./pages/Bookmark/Bookmark";
import Explore from "./pages/Explore/Explore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { token } = useSelector((store) => store.auth);
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      <ToastContainer />
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
          path='/bookmark'
          element={
            <PrivateRoute>
              <Bookmark />
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
