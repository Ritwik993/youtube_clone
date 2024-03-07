import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { addChatMessage } from "../utils/chatSlice";

const WatchPage = () => {
  const [liveText,setLiveText]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  return (
    <div className="m-4 w-full">
      <div className="flex gap-6 w-full">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="flex-grow h-[500px] mr-[150px] ">
      <div className="h-full bg-slate-300  rounded-lg overflow-y-scroll flex flex-col-reverse">
        <LiveChat/>
      </div>
      <form className="border-2 border-black rounded-md" onSubmit={(e)=>{
        e.preventDefault();

        dispatch(addChatMessage({
          name:"Ritwik",
          message:liveText
        }))
        setLiveText("")
      }}>
        <input type="text" className="w-3/4 p-1" value={liveText} onChange={(e)=>{setLiveText(e.target.value)}}/>
        <button className="w-1/4 bg-black text-white p-1 rounded-r-sm" onClick={()=>{
          dispatch(addChatMessage({
            name:"Ritwik",
            message:liveText
          }))
          setLiveText("")
        }}>Send</button>
      </form>
      </div>
      
      
      </div>
      
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
