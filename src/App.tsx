import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";

function App() {
  return (
    <Router>
      <header className="bg-blue-700 text-white p-4">
        <nav className="flex justify-between items-center max-w-4xl mx-auto">
          <h1 className="text-xl font-bold">SkillSprint</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/challenges" className="hover:underline">Challenges</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
