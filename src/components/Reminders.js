import { useState } from "react";

function Reminders() {
  const [reminder, setReminder] = useState("");
  const [message, setMessage] = useState("");

  const setStudyReminder = () => {
    if (reminder) {
      setMessage(`Reminder set for ${reminder}`);
      setTimeout(() => alert(`Time to study: ${reminder}`), 5000);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Study Reminders</h2>
      <input
        type="text"
        placeholder="Enter Reminder (e.g., JavaScript Study)"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={setStudyReminder} className="bg-green-500 text-white p-2 m-2">
        Set Reminder
      </button>
      <p>{message}</p>
    </div>
  );
}

export default Reminders;
