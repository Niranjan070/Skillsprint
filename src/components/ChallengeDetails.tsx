import { useState } from "react";
import { Challenge } from "../pages/Home";

const ChallengeDetails = ({ challenge }: { challenge: Challenge }) => {
  const [solution, setSolution] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ challengeId: challenge.id, solution }),
      });

      const data = await response.json();
      setPopupMessage(data.message);
    } catch (error) {
      console.error("Error submitting solution:", error);
      setPopupMessage("Failed to submit solution.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{challenge.title}</h1>
      <p className="text-lg mb-4">{challenge.description}</p>
      <textarea
        className="w-full h-40 p-2 border rounded"
        placeholder="Write your solution here..."
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit Solution
      </button>
      {popupMessage && (
        <div className="mt-4 p-4 bg-green-100 border border-green-500 rounded">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ChallengeDetails;