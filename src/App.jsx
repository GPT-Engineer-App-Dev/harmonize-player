import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreatePlaylist from "./pages/CreatePlaylist.jsx";
import Player from "./pages/Player.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-playlist" element={<CreatePlaylist />} />
      <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
