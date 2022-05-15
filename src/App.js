import "./util.css";
import Navbar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed/Feed";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      <Navbar />
      <Feed />
      {/* <Login /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
