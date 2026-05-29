import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Mood from "./pages/mood";
import Tasks from "./pages/tasks";

function App() {
  return (
    <BrowserRouter>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/mood">Mood</Link> |{" "}
        <Link to="/tasks">Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;