import "./RoomCard.css";

const RoomCard = ({ title, host, members, topic }) => {
  return (
    <div className="room-card">
      <div className="room-info">
        <h3>{title}</h3>
        <p>
          Hosted by <span className="host">{host}</span>
        </p>
      </div>
      <div className="room-footer">
        <span className="topic">{topic}</span>
        <span className="members"> members</span>
      </div>
    </div>
  );
};

export default RoomCard;
