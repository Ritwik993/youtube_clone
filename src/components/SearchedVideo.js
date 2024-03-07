import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { YOUTUBE_SEARCH_VIDEO } from "../utils/constant";
import SearchVideoCard from "./SearchVideoCard";
import { Link } from "react-router-dom";

const SearchedVideo = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getSearchVideoData();
  }, []);
  const searchText = useSelector((store) => store.video.data);
  const getSearchVideoData = async () => {
    const apiUrl = `${YOUTUBE_SEARCH_VIDEO}&q=${searchText}`;
    const data = await fetch(apiUrl);
    const json = await data.json();
    console.log(searchText);
    console.log(json.items);
    setVideos(json.items);
  };
  return (
    <div className="ml-4">
      {videos.map((video) => {
        return (
          
            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId} >
              <SearchVideoCard info={video} key={video.id.videoId}  />
            </Link>
       
        );
      })}
    </div>
  );
};

export default SearchedVideo;
