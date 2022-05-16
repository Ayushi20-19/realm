import "./util.css";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed/Feed";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./pages/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/auth' element={<Login />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
