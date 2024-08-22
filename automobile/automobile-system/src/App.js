import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./screens";
import Login from "./screens/login";
import SignUp from "./screens/signup";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
