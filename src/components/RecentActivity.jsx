import { useEffect, useState } from "react";
import "./RecentActivity.css";

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/activities/") // 🔹 replace with your API
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error("Error fetching activities:", err));
  }, []);

  return (
    <aside className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map((a, i) => (
          <li key={i}>
            <span className="user">{a.user}</span> {a.action}{" "}
            <span className="room">{a.room}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RecentActivity;
