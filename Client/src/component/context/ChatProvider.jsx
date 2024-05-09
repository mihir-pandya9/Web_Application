import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/login/user");
  //       console.log(response.data.user)
  //       setUser(response.data.user);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //       window.location.href = '/login';
  //     }
  //   };
  //   fetchData();
  // }, []); // Include 'history' in the dependency array

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
