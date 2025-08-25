// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Home is not present yet; temporarily route root to Signin
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
