import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const PreviousButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`transition-all duration-300 scale-90 hover:scale-110 bg-black p-3 rounded-full flex justify-center h-fit w-fit cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <MdKeyboardDoubleArrowLeft className="text-white text-xl" />
    </button>
  );
};

export default PreviousButton;
