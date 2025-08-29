import { useEffect, useState } from "react";
import logo from "../assets/favicon.ico";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://13.234.124.118/room/topics/") // 🔹 replace with your API
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <h2 className="navbar-title">StudyBuddy</h2>
      </div>
      <div className="navbar-center">
        <input
          // method="GET"
          type="text"
          placeholder="Search for rooms..."
          className="search-bar"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="username">jaggu</span>
            <img src={user.avatar} alt="profile" className="profile-img" />
          </>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
