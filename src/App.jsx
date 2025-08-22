import "./App.css";
import Navbar from "./components/Navbar";
import RecentActivity from "./components/RecentActivity";
import RoomList from "./components/RoomList";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="app-grid">
      <header className="nav-area">
        <Navbar />
      </header>

      <aside className="side-area">
        <Sidebar />
      </aside>

      <main className="main-area">
        <div className="main-inner">
          <section className="rooms-area">
            <RoomList />
          </section>

          <aside className="activity-area">
            <RecentActivity />
          </aside>
        </div>
      </main>
    </div>
  );
}
