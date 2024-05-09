import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const PreviousButon = () => {
  return (
    <div className="transition-all duration-300 scale-90 hover:scale-110 bg-black p-3 rounded-full flex justify-center h-fit w-fit cursor-pointer">
      <button> <MdKeyboardDoubleArrowLeft className="text-white text-xl" /> </button>
    </div>
  )
}

export default PreviousButon
