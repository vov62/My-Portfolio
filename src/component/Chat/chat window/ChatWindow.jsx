import React, { useState } from "react";
import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";
import "./chatWindow.css";

const ChatWindow = ({ visible }) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);

  return (
    <>
      <div className="chat-window" style={{ opacity: visible ? "1" : "0" }}>
        {user === null || chat === null ? (
          <EmailForm
            setUser={setUser}
            user={user}
            setChat={setChat}
            chat={chat}
          />
        ) : (
          <ChatEngine user={user} chat={chat} visible={visible} />
        )}
        )
      </div>
    </>
  );
};

export default ChatWindow;
