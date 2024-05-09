import { useState, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import AlertMessage from "./AlertMessage";
import SupportChatLoader from "./SupportChatLoader";
import axios from 'axios';

const SupportWindow = () => {
  const [input, setInput] = useState('');
  const [storemessage, sendstoremessage] = useState([]);
  const [alert, setalert] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [combinedData, setcombinedData] = useState("");
  // const [data, setData] = useState([]);
  // const [functionality1, setFuctiionality1] = useState("");
  // const [functionality2, setFuctiionality2] = useState("");
  // const [workoutResponce, setWorkoutResponce] = useState("You have to enter text in textbox like \"Muscle-Name\" \"-\"  \"Curr_Intensity Level\"");
  // const [yogaResponce, setYogaResponce] = useState("You have to enter text in textbox like \"Level\" \"-\"  \"Benifits\"");

  // const [message, setemessage] = useState([]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const MessageDetail = ({ title, value }) => (
    <div className="message-detail p-1 rounded-xl">
      <h1 className="font-bold">{title}:</h1>
      <p>{typeof value === 'string' ? value : JSON.stringify(value)}</p>
    </div>
  );


  // const sendMessage = async () => {
  //   if (input === "") {
  //     setalert(true);
  //     setTimeout(() => { setalert(false) }, 2000);
  //     return;
  //   }

  //   sendstoremessage([...storemessage, { text: input, type: 'user' }]);
  //   try {
  //     let requestUrl = 'http://localhost:7000/chat';
  //     let requestBody = { message: input, preferences: null };

  //     const response = await axios.post(requestUrl, requestBody);

  //     const data = response.data;

  //     console.log("Data: ", data);

  //     if (data.response.includes('Please provide user preferences for generating a workout plan.')) {
  //       const muscle = prompt('Please enter the muscle:');
  //       const level = prompt('Please enter the level:');

  //       requestBody = { message: input, preferences: { Muscle: muscle, Level: level } };
  //       requestUrl = 'http://localhost:7000/workout';
  //     } else if (data.response.includes('Please provide user preferences for generating a yoga plan.')) {
  //       const level = prompt('Please enter the level:');
  //       const benefits = prompt('Please enter the benefits:');

  //       requestBody = { message: input, preferences: { Level: level, Benefits: benefits } };
  //       requestUrl = 'http://localhost:7000/yoga';
  //     }

  //     const updatedResponse = await axios.post(requestUrl, requestBody);
  //     const responseData = updatedResponse.data.response;

  //     console.log("Data: ", responseData);

  //     let combinedData = "";

  //     responseData.forEach((item, index) => {

  //       if (item.WorkOut) {
  //         const { WorkOut, Equipment, 'Beginner Sets': beginnerSets, Explaination } = item;
  //         combinedData += `${WorkOut} \n\n${Equipment}\n\n${beginnerSets}\n\n${Explaination}`;
  //       }
  //       else if (item.AName) {
  //         const { AName, awareness, Breathing } = item;
  //         combinedData += `${AName} \n\n${awareness}\n\n${Breathing}`;
  //         if (index !== responseData.length - 1) {
  //           combinedData += "\n\n"; // Add a separator if it's not the last item
  //         }
  //       }
  //       else {
  //         setcombinedData(updatedResponse.response);
  //       }

  //     });

  //     sendstoremessage([...storemessage, { text: combinedData, sender: 'bot' }]);

  //     console.log("Combined Data: ", combinedData);


  //   } catch (error) {
  //     console.error('Error fetching bot response:', error);
  //   }
  //   setInput('');
  // };

  const sendMessage = async () => {
    if (input === "") {
      setalert(true);
      setTimeout(() => { setalert(false) }, 2000);
      return;
    }

    sendstoremessage([...storemessage, { text: input, sender: 'user' }]);
    try {
      let requestUrl = 'http://localhost:7000/chat';
      let requestBody = { message: input, preferences: null };

      const response = await axios.post(requestUrl, requestBody);
      const data = response.data;

      console.log("Data: ", data);

      if (data.response.includes('Please provide user preferences for generating a workout plan.')) {
        const muscle = prompt('Please enter the muscle:');
        const level = prompt('Please enter the level:');

        requestBody = { message: input, preferences: { Muscle: muscle, Level: level } };
        requestUrl = 'http://localhost:7000/workout';
      } else if (data.response.includes('Please provide user preferences for generating a yoga plan.')) {
        const level = prompt('Please enter the level:');
        const benefits = prompt('Please enter the benefits:');

        requestBody = { message: input, preferences: { Level: level, Benefits: benefits } };
        requestUrl = 'http://localhost:7000/yoga';
      }

      const updatedResponse = await axios.post(requestUrl, requestBody);
      const responseData = updatedResponse.data.response;

      console.log("Response Data: ", responseData);

      if (responseData && responseData.length > 0) {
        let combinedData = "";

        if (!Array.isArray(responseData)) {
          sendstoremessage([...storemessage, { text: data.response, sender: 'bot' }]);
          return;
        }

        responseData.forEach((item, index) => {
          if (item.WorkOut) {
            const { WorkOut, Equipment, 'Beginner Sets': beginnerSets, Explaination } = item;
            combinedData += `${WorkOut} \n\n${Equipment}\n\n${beginnerSets}\n\n${Explaination}`;
          } else if (item.AName) {
            const { AName, awareness, Breathing } = item;
            combinedData += `${AName} \n\n${awareness}\n\n${Breathing}`;
            if (index !== responseData.length - 1) {
              combinedData += "\n\n"; // Add a separator if it's not the last item
            }
          }
          else {
            return;
          }
        });

        sendstoremessage([...storemessage, { text: combinedData, sender: 'bot' }]);
      }

    } catch (error) {
      console.error('Error fetching bot response:', error);
    }
    setInput('');
  };

  const sendRequest = async (url, body) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const responseData = await response.json();
      sendstoremessage([...storemessage, { text: responseData.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  useEffect(() => {
    console.log(storemessage);
  }, [storemessage]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  useEffect(() => {
    console.log(storemessage);
  }, [storemessage]);

  return (
    <div className="z-40 ease-in duration-500 bg-neutral-700 h-3/4 w-3/12 border-2 border-sky-500 rounded-xl fixed bottom-28 right-12">
      {loading && <SupportChatLoader />}
      {!loading && (
        <div className="overflow-y-auto h-5/6 mt-1">
          <div className="font-Montserrat text-base text-white p-2 rounded-xl m-2 h-fit bg-orange-500 w-72">
            <h1 className="flex items-center text-lg">This is <p className="ml-2 font-bold">AI BOT</p></h1>
            <h1 className="text-lg">What can i help you</h1>
            {storemessage.some(message => message.type === "server") && (
              <div>
                {storemessage.map((message, index) => (
                  message.type === "server" && (
                    <div key={index} className={`message ${message.type} p-2 my-2 rounded-lg`}>
                      <div className="server-message">
                        <MessageDetail title="Name" value={message.WorkOut} />
                        <MessageDetail title="Equipment" value={message.Equipment} />
                        <MessageDetail title="Sets" value={message["Beginner Sets"]} />
                        <MessageDetail title="Explanation" value={message.Explanation} />
                      </div>
                      {index < storemessage.length - 1 && (
                        <hr key={`separator-${index}`} className="my-2 border-b w-50 border-gray-300" />
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
          {storemessage.some(message => message.type !== 'server') && (
            <div>
              {storemessage.filter(message => message.type !== 'server').map((message, index) => (
                <div key={index} className={`text-white rounded-xl h-fit relative left-16 bg-green-500 w-72`} >
                  <div className={`message ${message.type} p-3 my-2 rounded-lg`}>
                    <div>
                      <p>{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center absolute bottom-4 items-center w-full">
            {alert && <AlertMessage />}
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                  e.preventDefault();
                }
              }}
              className="p-2 h-8 w-5/6 mr-4 rounded-xl text-lg"
              type="text"
              value={input}
              placeholder="Enter text"
            />
            <IoSend
              onClick={sendMessage}
              className="text-white cursor-pointer size-5 hover:text-gray-200 transition-colors duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportWindow;

