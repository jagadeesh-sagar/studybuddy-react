import { useEffect, useState } from "react";
import logo from "../assets/favicon.ico";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/") // 🔹 replace with your API
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <h2 className="navbar-title">StudyBuddy</h2>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search for rooms..."
          className="search-bar"
        />
      </div>
      <div className="navbar-right">
        {user ? (
          <>
            <span className="username">{user.username}</span>
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
