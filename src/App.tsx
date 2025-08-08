import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import ChallengeDetails from "./components/ChallengeDetails";
import { challenges, Challenge } from "./pages/Home";

function App() {
  const ChallengeDetailsWrapper = () => {
    const { id } = useParams();
    const challenge = challenges.find((c: Challenge) => c.id === parseInt(id || "0"));
    return challenge ? <ChallengeDetails challenge={challenge} /> : <p>Challenge not found</p>;
  };

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
        <Route path="/challenge/:id" element={<ChallengeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
