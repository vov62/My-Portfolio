import { useState, useEffect } from "react";
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";
import "./chatEngine.css";

const ChatEngine = ({ user, chat, visible }) => {
  return (
    <div className="chat-engine-container">
      {visible && (
        <ChatEngineWrapper>
          <Socket
            projectID={process.env.REACT_APP_PRIVATE_ID}
            userName={"avivovgen1@gmail.com"}
            userSecret={"avivovgen1@gmail.com"}
          />
          <ChatFeed activeChat={chat.id} />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

export default ChatEngine;
