import { useState } from "react";
import { io } from "socket.io-client";
// import axios from 'axios'

const CommunityChat = () => {

  const [text, setText] = useState('');
  const socket = io('http://localhost:8000');
  const [value, setValue] = useState([]);
  const sendMessage = () => {
    socket.emit("user-message", text);
    setText("");
  }

  socket.on("message", (message) => {
    setValue([...value, message]);
  });

  return (
    <div className="absolute top-24 p-3 text-center w-full">
      <h1 className="mb-3">Chatting App</h1>
      <input className="border p-2 border-black mr-2" onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessage()
        }
      }} type="text" placeholder="Enter Text" onChange={e => setText(e.target.value)} value={text} />
      <button className="ml-2 p-2 border border-black" onClick={() => sendMessage()}>Send</button>
      {value.map((data, index) => (
        <h1 key={index} className="text-xl mt-5 font-bold w-full">{data}</h1>
      ))}
    </div>
  )
}

export default CommunityChat