import type { Chat } from "../data/mockChats";

const groups = ["Today", "Last Week", "January", "2025"];

interface SidebarProps {
  chats: Chat[];
  activeChatId: string | null;
  onChatSelect: (id: string) => void;
  onNewChat: () => void;
  onProfileClick: () => void;
}

function Sidebar({
  chats,
  activeChatId,
  onChatSelect,
  onNewChat,
  onProfileClick,
}: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <button className="new-message-btn" onClick={onNewChat}>
          + New message
        </button>
      </div>

      <div className="chat-list"> 
        {groups.map((group) => {
          const groupedChats = chats.filter((c) => c.group === group);
          if (groupedChats.length === 0) return null;
          return (
            <div key={group} className="chat-group">
              <h2 className="chat-group-label">{group}</h2>
              {groupedChats.map((chat) => (
                <button
                  key={chat.id}
                  className={`chat-item${activeChatId === chat.id ? " active" : ""}`}
                  onClick={() => onChatSelect(chat.id)}
                >
                  {chat.title}
                </button>
              ))}
            </div>
          );
        })}
      </div>

      <div className="sidebar-footer">
        <button className="user-profile" onClick={onProfileClick}>
          <span className="user-avatar">JD</span>
          <span className="user-name">John Doe</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
