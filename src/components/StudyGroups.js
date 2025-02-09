import { useState } from "react";

const groups = [
  { name: "React Beginners", topic: "React.js" },
  { name: "Python Mastery", topic: "Python" },
  { name: "Data Science Club", topic: "Machine Learning" }
];

function StudyGroups() {
  const [groupList, setGroupList] = useState(groups);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Study Groups</h2>
      <ul className="list-disc pl-5">
        {groupList.map((group, index) => (
          <li key={index}>
            {group.name} - Topic: {group.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudyGroups;
