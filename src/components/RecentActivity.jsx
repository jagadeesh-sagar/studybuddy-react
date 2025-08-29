import { useEffect, useState } from "react";
import "./RecentActivity.css";

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchrooms = async () => {
      try {
        const res = await fetch("http://13.234.124.118/room/message/"); // 🔹 replace with your API
        const data = await res.json();
        setActivities(data);
      } catch (err) {
        console.error("Error fetching topics:", err);
      }
    };

    fetchrooms();
  }, []);

  return (
    <aside className="recent-activity">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map(
          (a, i) => (
            console.log(a),
            (
              <li key={i}>
                <span className="user">{a.user.username}</span> {a.body}{" "}
                <span className="room">{a.room_name}</span>
              </li>
            )
          )
        )}
      </ul>
    </aside>
  );
};

export default RecentActivity;
