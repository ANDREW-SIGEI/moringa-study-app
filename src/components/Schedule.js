import { useState } from "react";

function Schedule() {
  const [schedule, setSchedule] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const addSchedule = () => {
    if (title && time) {
      setSchedule([...schedule, { title, time }]);
      setTitle("");
      setTime("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Study Schedule</h2>
      <input
        type="text"
        placeholder="Study Topic"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={addSchedule} className="bg-blue-500 text-white p-2 m-2">
        Add Schedule
      </button>
      <ul className="list-disc pl-5">
        {schedule.map((item, index) => (
          <li key={index}>
            {item.title} at {item.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
