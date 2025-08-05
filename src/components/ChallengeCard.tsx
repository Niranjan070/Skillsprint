interface Challenge {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  description?: string;
}

const badgeColors = {
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500",
};

const ChallengeCard = ({ challenge }: { challenge: Challenge }) => (
  <div className="bg-white shadow rounded-lg p-6 transition hover:scale-[1.02]">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-bold">{challenge.title}</h2>
      <span className={`text-xs px-2 py-1 rounded text-white font-semibold ${badgeColors[challenge.difficulty]}`}>{challenge.difficulty}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-2">
      {challenge.tags.map((tag, i) => (
        <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{tag}</span>
      ))}
    </div>
    {challenge.description && <p className="text-gray-700 mb-2">{challenge.description}</p>}
    <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Mark as Solved</button>
  </div>
);

export default ChallengeCard;
