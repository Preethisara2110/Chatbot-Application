import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Header from "./components/Header";
import History from "./components/History";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}
      <main className="main">
        <Header onMenu={() => setMenuOpen(true)} />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Chat />} />
        </Routes>
      </main>
    </div>
  );
}
