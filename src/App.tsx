import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import SettingsDialog from "./components/SettingsDialog";
import mockChats from "./data/mockChats";
import "./App.css";

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [chats, setChats] = useState(mockChats);

  const activeChat = chats.find((c) => c.id === activeChatId) ?? null;



  return (
    <div className="app">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onChatSelect={setActiveChatId}
        onNewChat={() => setActiveChatId(null)}
        onProfileClick={() => setSettingsOpen(true)}
      />
      <ChatArea activeChat={activeChat} setChats={setChats}/>
      <SettingsDialog
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
