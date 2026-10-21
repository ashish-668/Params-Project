
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import HomeDetails from "./pages/HomeDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<HomeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
