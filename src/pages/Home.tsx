import StreakTracker from "../components/StreakTracker";
import TipBox from "../components/TipBox";
import ChallengeCard from "../components/ChallengeCard";

export type Challenge = {
  id: number;
  title: string;
  difficulty: "Medium" | "Easy" | "Hard";
  tags: string[];
  description: string;
};

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Reverse a Linked List",
    difficulty: "Medium", // Correct literal type
    tags: ["Linked List", "Pointers"],
    description: "Write a function to reverse a singly linked list.",
  },
  {
    id: 2,
    title: "Two Sum",
    difficulty: "Easy", // Correct literal type
    tags: ["Array", "Hash Table"],
    description: "Find two numbers that add up to a target value.",
  },
  {
    id: 3,
    title: "LRU Cache",
    difficulty: "Hard", // Correct literal type
    tags: ["Design", "Hash Table"],
    description: "Design and implement a data structure for Least Recently Used (LRU) cache.",
  },
];

const todayChallenge: Challenge = {
  id: 1,
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
