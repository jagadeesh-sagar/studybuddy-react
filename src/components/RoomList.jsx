import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import "./RoomList.css";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/rooms/") // 🔹 replace with your API
      .then((res) => res.json())
      .then((data) => setRooms(data))
      .catch((err) => console.error("Error fetching rooms:", err));
  }, []);

  return (
    <div className="room-list">
      <div className="room-header">
        <h2>Study Rooms</h2>
        <button className="create-room-btn">+ Create Room</button>
      </div>

      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          title={room.title}
          host={room.host}
          members={room.members}
          topic={room.topic}
        />
      ))}
    </div>
  );
};

export default RoomList;
