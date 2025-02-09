import { useState } from "react";

const quotes = [
  "Believe in yourself!",
  "You are capable of amazing things.",
  "Consistency is key to success.",
  "Keep pushing forward!"
];

function Quotes() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Motivational Quote</h2>
      <p className="italic">"{quote}"</p>
      <button onClick={generateQuote} className="bg-purple-500 text-white p-2 m-2">
        Get New Quote
      </button>
    </div>
  );
}

export default Quotes;
