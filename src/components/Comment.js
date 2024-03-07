import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="m-4 w-[900px] flex bg-gray-100 rounded-lg ">
      <img
        src="https://cdn-icons-png.freepik.com/256/64/64572.png"
        alt="user_icon"
        className="h-8 m-2"
      />
      <div className="m-2">
        <p className="font-bold">{data.name}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Comment;
