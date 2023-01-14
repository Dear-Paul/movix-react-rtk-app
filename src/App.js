import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RequireAuthentication from "./customHooks/requireAuthentication";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";


function App() {

  const ProtectedHome = RequireAuthentication(Home);
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<ProtectedHome/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/> */}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
