import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onTopicSelect }) => {
  const [topics, setTopics] = useState([]);
  const [fulltopics, setFulltopics] = useState(false);
  useEffect(() => {
    const fetchrooms = async () => {
      try {
        const res = await fetch("http://13.234.124.118/room/topics/"); // 🔹 replace with your API
        const data = await res.json();
        setTopics(data);
      } catch (err) {
        console.error("Error fetching topics:", err);
      }
    };

    fetchrooms();
  }, []);

  const handleClick = (endpoint) => {
    onTopicSelect(endpoint);
  };

  const handleMore = () => {
    console.log("hidiof");
    setFulltopics(!fulltopics);
  };

  const limitedTopics = fulltopics ? topics : topics.slice(0, 3);

  return (
    <aside className="sidebar">
      <h3>Topics</h3>
      <ul>
        {limitedTopics.map((topic) => (
          <li onClick={() => handleClick(topic.endpoint)} key={topic.id}>
            <span>{topic.topic}</span>
            <span className="count">{topic.count}</span>
          </li>
        ))}
      </ul>
      {/* {selectedEndpoint && <RoomList endpoint={selectedEndpoint} />} */}
      <a onClick={handleMore} className="more">
        {fulltopics ? "See Less" : "See More"}
      </a>
    </aside>
  );
};

export default Sidebar;
