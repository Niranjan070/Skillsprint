import { useState } from "react";

const TipBox = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-yellow-700">Tip for Yesterday's Challenge</span>
        <button
          className="text-xs text-blue-600 underline ml-2"
          onClick={() => setShow((s) => !s)}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && (
        <div className="mt-2 text-gray-700">
          Use a dummy node to simplify edge cases when reversing a linked list.
        </div>
      )}
    </div>
  );
};

export default TipBox;
