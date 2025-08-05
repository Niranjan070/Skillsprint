import StreakTracker from "../components/StreakTracker";
import TipBox from "../components/TipBox";
import ChallengeCard from "../components/ChallengeCard";

export type Challenge = {
  title: string;
  difficulty: "Medium" | "Easy" | "Hard";
  tags: string[];
  description: string;
};

const todayChallenge: Challenge = {
  title: "Reverse a Linked List",
  difficulty: "Medium", // Correct literal type
  tags: ["Linked List", "Pointers"],
  description: "Write a function to reverse a singly linked list.",
};

const Home = () => (
  <div className="p-6 max-w-4xl mx-auto space-y-8">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">SkillSprint – Daily Coding Challenge</h1>
    <ChallengeCard challenge={todayChallenge} />
    <StreakTracker />
    <TipBox />
  </div>
);

export default Home;
