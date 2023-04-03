import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";
import DataTable from "./pages/Table";
import { useNavigate, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/table" element={<DataTable />} />
      </Routes>
    </div>
  );
}

export default App;
