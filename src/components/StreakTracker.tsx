const StreakTracker = () => (
  <div className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
    <div className="mb-2 font-semibold">Current Streak: <span className="text-blue-600">3 days</span></div>
    <div className="grid grid-cols-7 gap-1 mb-2">
      {/* Dummy 7x2 grid for 2 weeks */}
      {[...Array(14)].map((_, i) => (
        <div key={i} className={`w-4 h-4 rounded ${i < 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      ))}
    </div>
    <div className="w-full bg-gray-300 rounded-full h-2">
      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '21%' }}></div>
    </div>
    <div className="text-xs text-gray-500 mt-1">Keep your streak going!</div>
  </div>
);

export default StreakTracker;
