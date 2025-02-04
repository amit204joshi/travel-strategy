import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./components/Food";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
import List from "./components/List";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedules" element={<Schedule />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/lists" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}