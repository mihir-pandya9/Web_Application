
const TextMessage = ({ message }) => {
  return (
    <div className="content-center mt-5 h-72 min-w-fit rounded-xl p-2 pl-5 pr-1 white-space: nowrap overflow-auto">
      {message.map((value) => {
        return (
          <div className="text-sm mb-2 text-black bg-white h-fit p-1 rounded-xl min-w-64 max-w-72 overflow-x-auto word-wrap break-word">
            <li className="list-none">{value}</li>
          </div>

        );
      })}

    </div>
  )
}

export default TextMessage
