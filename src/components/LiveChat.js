import React, { useEffect } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, generateRandomSentence } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      //   console.log("API Polling"); Make an API call here if u find it
      dispatch(
        addChatMessage({
          name: generateRandomName(),
          message: generateRandomSentence(),
        })
      );
    },1500);
    // After every 2ms API is going to be called !!!
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div>
        {chatMessages.map((c, i) => {
          return <Chat key={i} name={c.name} message={c.message} />;
        })}
      </div>
      
    </>
  );
};

export default LiveChat;
