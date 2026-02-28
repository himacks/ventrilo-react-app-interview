import { useState } from "react";
import type { Chat } from "../data/mockChats";

interface ChatAreaProps {
  activeChat: Chat | null;
  setChats: React.Dispatch<React.SetStateAction<Chat[]>>;
}

function ChatArea({ activeChat, setChats }: ChatAreaProps) {


  const [localMessage, setLocalMessage] = useState("");

  function handleSendMessage(message: string) {
    setChats((prevChats) => {
      const newMessage = { role: "user" as const, content: message };

      if (!activeChat) {
        return [...prevChats, { id: crypto.randomUUID(), title: "New Chat", group: "Today", messages: [newMessage] }];
      }

      const newChats = prevChats.map((chat) => {
        if (chat.id === activeChat?.id) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
          };
        } else {
          return chat;
        }
      });

      return newChats;
    });

    setLocalMessage("");
  }

  if (!activeChat) {
    return (
      <div className="chat-area">
        <div className="chat-content welcome-view">
          <div className="welcome">
            <h1 className="welcome-name">Hi John Doe</h1>
            <p className="welcome-question">How can I help?</p>
          </div>
          <div className="chat-input-box">
            <textarea
              className="chat-input"
              placeholder="Send a message..."
              value={localMessage}
              onChange={(e) => setLocalMessage(e.target.value)}
              rows={1}
            />
            <div className="chat-input-actions">
              <button className="send-btn" disabled={!localMessage.trim()} onClick={() => handleSendMessage(localMessage)}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-area">
      <div className="chat-messages">
        {activeChat.messages.map((message, index) => (
          <div key={index} className={`chat-message message-${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-input-floating">
        <div className="chat-input-box">
          <textarea
            className="chat-input"
            placeholder="Send a message..."
            rows={3}
            value={localMessage}
            onChange={(e) => setLocalMessage(e.target.value)}
          />
          <div className="chat-input-actions">
            <button className="send-btn" disabled={!localMessage.trim()} onClick={() => handleSendMessage(localMessage)}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatArea;
