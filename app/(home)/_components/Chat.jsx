"use client";
import { useEffect, useState } from "react";
import io from "socket.io-client";
let socket;
const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === "production";
    socket = io("http://54.175.255.85:5000/socket.io", {
      transports: ["websocket"], // Specify transports if needed
      secure: true, // Ensure secure connection
    });
    console.log("socnet id", socket);
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };
  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
export default Chat;
