import React, { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <div className=" grid md:grid-cols-4 lg:grid-cols-5 gap-4 m-4">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  ) : (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} key={video.id} />
          </Link>
        );
      })}{" "}
    </div>
  );
};

export default VideoContainer;
