import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import "./RoomList.css";

const RoomList = ({ endpoint, queryendpoint }) => {
  const [rooms, setRooms] = useState([]);
  const defaultEndpoint = "http://13.234.124.118/room/";
  let apiEndpoint = defaultEndpoint; // Default to the base URL

  if (queryendpoint) {
    apiEndpoint = `http://13.234.124.118/room/?q=${queryendpoint}`;
    console.log("this is real");
  } else if (endpoint) {
    apiEndpoint = endpoint;
  }

  useEffect(() => {
    const fetchrooms = async () => {
      try {
        const res = await fetch(apiEndpoint); // 🔹 replace with your API
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.log("error jaggu;", err);
      }
    };
    fetchrooms();
  }, [apiEndpoint]);

  return (
    <div className="room-list">
      <div className="room-header">
        <h2>Study Rooms</h2>
        <button className="create-room-btn">+ Create Room</button>
      </div>

      {rooms.map((room) => (
        // console.log(room.user.username),
        <RoomCard
          key={room.id}
          title={room.name}
          host={room.user.username}
          members={room.participants}
          topic={room.topic.topic}
        />
      ))}
    </div>
  );
};

export default RoomList;
