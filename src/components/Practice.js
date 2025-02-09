import { useState } from "react";

const challenges = [
  "Write a function that reverses a string.",
  "Find the largest number in an array.",
  "Create a React component that fetches data from an API.",
  "Implement a to-do list using React state."
];

function Practice() {
  const [challenge, setChallenge] = useState(challenges[0]);

  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setChallenge(challenges[randomIndex]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Technical Practice</h2>
      <p>{challenge}</p>
      <button onClick={generateChallenge} className="bg-red-500 text-white p-2 m-2">
        Get New Challenge
      </button>
    </div>
  );
}

export default Practice;
