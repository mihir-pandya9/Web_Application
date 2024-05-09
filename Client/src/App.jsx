// import { useEffect, useState } from "react"
import Header from "./component/Header/Header";
import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SupportChat from './component/SupportChatBox/SupportChat.jsx'
import ChatProvider from "./component/context/ChatProvider.jsx";

function App() {

  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(true);
  //   }, 5000)
  // }, [setVisible])

  return (

    <ChatProvider>
      <ChakraProvider>
        <div className="h-screen">
          <Header />
          <SupportChat />
          <Outlet />
        </div>
      </ChakraProvider >
    </ChatProvider>

  )
}

export default App