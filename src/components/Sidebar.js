import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import home from "../assests/home.svg";
import Shorts from "../assests/shorts.svg";
import Subscription from "../assests/subscriptions.svg";
import Trending from "../assests/Trending.svg";
import Shopping from "../assests/Shoppingsvg.svg";
import Gaming from "../assests/Gaming.svg";
import Live from "../assests/Gaming.svg";
import Music from "../assests/Music.svg";
import Movies from "../assests/Movies.svg";
import Zee from "../assests/Zee_news.jpg";
import Angry from "../assests/Angry_Prakash.jpg";
import Coffee from "../assests/cozy_coffee.jpg";
import Wion from "../assests/wion.jpg";
import Studio from "../assests/studio.svg";
import Kids from "../assests/kids.svg";
import YoutubeMusic from "../assests/youtube-music.svg";
import Premium from "../assests/premium.svg";
import Setting from "../assests/settings.svg";
import Feedback from "../assests/Feedback.svg";
import Help from "../assests/Help.svg";
import Flag from "../assests/flag.svg";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-48  fixed top-20 bottom-0 left-0 bg-white overflow-y-scroll">
      <div>
        <Link to="/">
          <div className="flex  items-center w-full p-2 hover:bg-gray-100 ">
            <div className="h-6">
              <img src={home} className=" h-full" alt="" />
            </div>

            <p className="ml-6">Home</p>
          </div>
        </Link>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          {" "}
          <div className="h-6">
            <img src={Shorts} className="h-full w-full" alt="" />
          </div>
          <p className="ml-6">Shorts</p>
        </div>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <div className="h-6">
            <img src={Subscription} className="h-full w-full" alt="" />
          </div>

          <p className="ml-4">Subscriptions</p>
        </div>
      </div>
      <hr className="border-b border-gray-200" />
      <div className="">
        <h1 className="font-bold p-2">Subscriptions</h1>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Coffee} alt="" className="h-1/6 w-1/6 rounded-full" />
          <p className="flex-1">Cozy Coffee Shop</p>
        </div>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Wion} alt="" className="h-1/6 w-1/6 rounded-full" />
          <p className="flex-1">Wion</p>
        </div>
        <div className="flex gap-2  w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Zee} alt="" className="h-1/6 w-1/6 rounded-full" />
          <p className="flex-1">Zee News</p>
        </div>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Angry} alt="" className="h-1/6 w-1/6 rounded-full" />
          <p className="flex-1">Angry Prakash</p>
        </div>

        <hr className="border-b border-gray-200" />
      </div>
      <div className="">
        <h1 className="font-bold p-2">Explore</h1>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Trending} alt="" />
          <p className="ml-6">Trending</p>
        </div>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Shopping} alt="" />
          <p className="ml-6">Shopping</p>
        </div>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Music} alt="" />
          <p className="ml-6">Music</p>
        </div>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Movies} alt="" />
          <p className="ml-6">Movies</p>
        </div>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Live} alt="" />
          <p className="ml-6">Live</p>
        </div>
        <div className="flex  w-full p-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Gaming} alt="" />
          <p className="ml-6">Gaming</p>
        </div>

        <hr className="border-b  border-gray-200" />
      </div>
      <div className="">
        <h1 className="font-bold p-2">More from Youtube</h1>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Premium} className="h-1/6 w-1/6 rounded-full" alt="" />
          <p>Youtube Premium</p>
        </div>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Studio} className="h-1/6 w-1/6 rounded-full" alt="" />
          <p>Youtube Studio</p>
        </div>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={YoutubeMusic} className="h-1/6 w-1/6 rounded-full" alt="" />
          <p>Youtube Music</p>
        </div>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Kids} className="h-1/6 w-1/6 rounded-full" alt="" />
          <p>Youtube Kids</p>
        </div>

        <hr className="border-b  border-gray-200" />
      </div>
      <div className="">
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Setting} alt="" />
          <p>Settings</p>
        </div>
        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Flag} alt="" />
          <p>Report History</p>
        </div>

        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Help} alt="" />
          <p>Help</p>
        </div>

        <div className="flex gap-2 w-full py-2 pl-2 items-center cursor-pointer hover:bg-gray-100">
          <img src={Feedback} alt="" />
          <p>Send Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
