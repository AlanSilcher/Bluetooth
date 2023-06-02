import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/SignIn/SignIn";
import LogIn from "./Pages/LogIn/LogIn";
import NavBar from "./Components/NavBar/Navbar";
import Bluetooth from "./Pages/Bluetooth/Bluetooth";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/bluetooth" element={<Bluetooth />} />
      </Routes>
    </div>
  );
}

export default App;
