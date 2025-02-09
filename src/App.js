import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Schedule from "./components/Schedule";
import Reminders from "./components/Reminders";
import Quotes from "./components/Quotes";
import Practice from "./components/Practice";
import StudyGroups from "./components/StudyGroups";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Moringa Study App
        </h1>

        {/* Navigation Bar */}
        <nav className="flex justify-center gap-4 border border-blue-500 rounded-lg p-4 bg-gray-100 shadow-md">
          <Link to="/schedule" className="nav-link">Schedule</Link>
          <Link to="/reminders" className="nav-link">Reminders</Link>
          <Link to="/quotes" className="nav-link">Quotes</Link>
          <Link to="/practice" className="nav-link">Practice</Link>
          <Link to="/study-groups" className="nav-link">Study Groups</Link>
        </nav>

        {/* Routes for different pages */}
        <div className="mt-6">
          <Routes>
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/reminders" element={<Reminders />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/study-groups" element={<StudyGroups />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
