import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/topics/") // 🔹 replace with your API
      .then((res) => res.json())
      .then((data) => setTopics(data))
      .catch((err) => console.error("Error fetching topics:", err));
  }, []);

  return (
    <aside className="sidebar">
      <h3>Topics</h3>
      <ul>
        {topics.map((t) => (
          <li key={t.id}>
            <span>{t.name}</span>
            <span className="count">{t.count}</span>
          </li>
        ))}
      </ul>
      <p className="more">See more</p>
    </aside>
  );
};

export default Sidebar;
