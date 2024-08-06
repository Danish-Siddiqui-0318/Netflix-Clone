import { useState } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Player from "./pages/Player/Player";
import TvSeries from "./pages/Tv/TvSeries";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/Series" element={<TvSeries />} />
      </Routes>
    </>
  );
}

export default App;
