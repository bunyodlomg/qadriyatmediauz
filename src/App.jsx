import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AOS from 'aos'
import 'aos/dist/aos.css';
function App() {

  AOS.init();
  const theme = useSelector((state) => state.theme.theme);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResources = async () => {
      const img = new Image();
      img.src = "/background.png";
      img.onload = () => setLoading(false); 
    };
    loadResources();
    AOS.init();
    AOS.refresh();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <p className="font-semibold text-brand text-lg loading"></p>
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""} dark:text-white text-black dark:bg-slate-700 bg-white `}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;