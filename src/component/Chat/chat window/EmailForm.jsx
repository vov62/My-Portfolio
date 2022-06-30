import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Avatar from "../Avatar";
import axios from "axios";
import "./emailForm.css";

const EmailForm = ({ setUser, user, setChat, chat }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //function that get or create user from api to the chat
  const getOrCreatedUser = (callback) => {
    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username: email,
          secret: email,
          email: email,
        },
        { headers: { "PRIVATE-KEY": process.env.REACT_APP_PRIVATE_KEY } }
      )
      .then((res) => callback(res.data))
      .catch((err) => {
        console.error("there was an error", err);
      });
  };

  const getOrCreateChat = (callback) => {
    axios
      .put(
        "https://api.chatengine.io/chats/",
        {
          usernames: ["nave", email],
          is_direct_chat: true,
        },
        { headers: { "Private-Key": process.env.REACT_APP_PRIVATE_KEY } }
      )
      .then((res) => callback(res.data))
      .catch((err) => {
        console.error("there was error", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("sending email", email);

    getOrCreatedUser((user) => {
      setUser(user);
      getOrCreateChat((chat) => setChat(chat));
    });
  };

  return (
    <div
      className="container-form"
      style={{ opacity: isLoading ? "0.33" : "1" }}
    >
      <div className="loading">
        {isLoading && <ClipLoader color="var(--red-sharp-color)" size={60} />}
      </div>
      <div className="form-wrapper">
        <div className="top-text">
          Welcome to my <br /> chat
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email.."
          />
        </form>
        <div className="form-bottom-text">
          <p>
            Enter your email <br /> to get started
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
