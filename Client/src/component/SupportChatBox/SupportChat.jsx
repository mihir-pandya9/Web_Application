import SupportWindow from "./SupportWindow";
import { useState } from "react";

const SupportChat = () => {

  const [visible, setVisible] = useState(false);

  const showTSupportWindow = () => {
    if (visible === false) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  return (
    <>
      <img onClick={showTSupportWindow} className="z-10 ease-out duration-300 border-2 border-neutral-700 w-14 h-14 rounded-full cursor-pointer fixed bottom-10 right-12 hover:w-16 hover:h-16" src="https://t3.ftcdn.net/jpg/03/28/64/64/240_F_328646483_cmmXdanOS9UHmegBomc0nVijhZWENWjq.jpg" />
      {visible && <SupportWindow />}
    </>
  )
}

export default SupportChat
