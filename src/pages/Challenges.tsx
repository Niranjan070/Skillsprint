import ChallengeCard from "../components/ChallengeCard";
import { Challenge } from "./Home";

const challenges: Challenge[] = [
  {
    title: "Reverse a Linked List",
    difficulty: "Medium", // Correct literal type
    tags: ["Linked List", "Pointers"],
    description: "Write a function to reverse a singly linked list.",
  },
  {
    title: "Two Sum",
    difficulty: "Easy", // Correct literal type
    tags: ["Array", "Hash Table"],
    description: "Find two numbers that add up to a target value.",
  },
  {
    title: "LRU Cache",
    difficulty: "Hard", // Correct literal type
    tags: ["Design", "Hash Table"],
    description: "Design and implement a data structure for Least Recently Used (LRU) cache.",
  },
];

const Challenges = () => (
  <div className="p-6 max-w-4xl mx-auto space-y-6">
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Past Challenges</h1>
    {/* Filter options placeholder */}
    <div className="mb-4">[Filter options here]</div>
    <div className="space-y-4">
      {challenges.map((challenge, idx) => (
        <ChallengeCard key={idx} challenge={challenge} />
      ))}
    </div>
  </div>
);

export default Challenges;
