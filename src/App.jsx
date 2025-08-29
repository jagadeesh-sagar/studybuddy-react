import "./App.css";
import Navbar from "./components/Navbar";
import RecentActivity from "./components/RecentActivity";
import RoomList from "./components/RoomList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [queryendpoint, setQueryendpoint] = useState(null);

  const handleTopicSelect = (endpoint) => {
    setSelectedEndpoint(endpoint);
  };

  const handlequerySelect = (endpoint) => {
    setQueryendpoint(endpoint);
  };

  return (
    <div className="app-grid">
      <header className="nav-area">
        <Navbar onSearch={handlequerySelect} />
      </header>

      <aside className="side-area">
        {/* <Sidebar /> */}
        <Sidebar onTopicSelect={handleTopicSelect} />
      </aside>

      <main className="main-area">
        <div className="main-inner">
          <section className="rooms-area">
            {/* <RoomList /> */}
            <RoomList
              queryendpoint={queryendpoint}
              endpoint={selectedEndpoint}
            />
          </section>

          <aside className="activity-area">
            <RecentActivity />
          </aside>
        </div>
      </main>
    </div>
  );
}
