import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import SideDrawer from "../miscellaneous/SideDrawer";
import MyChats from "../UserAvtar/MyChats";
import Chatbox from "../UserAvtar/ChatBox";
import { ChatState } from "../context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div className="absolute top-28">
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </div>
  );
};

export default Chatpage;