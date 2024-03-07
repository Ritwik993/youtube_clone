import React, { useEffect, useState } from "react";
import Notification from "../assests/notifications.svg";
import Upload from "../assests/upload.svg";
import VoiceSearch from "../assests/voice-search-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import store from "../utils/store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateData } from "../utils/videoSearchSlice";
import Youtube from "../assests/Youtube2.svg";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(toogleMenu());
  }

  const [searchText, setSearchText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const cacheData = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheData[searchText]) {
        setSuggestion(cacheData[searchText]);
      } else {
        getSearchData();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchData = async () => {
    // console.log(searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(cacheResults({ [searchText]: json[1] }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateData(searchText));
    navigate("/search");
  };

  return (
    <div className="grid fixed top-0 right-0 left-0 bg-white  grid-cols-12  shadow-lg p-4">
      <div className="flex items-center col-span-1 gap-4">
        <img
          alt="hamburger_icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          className="h-6 cursor-pointer"
          onClick={(e) => handleClick(e)}
        />
        <Link to="/">
          <img className=" h-12" alt="youtube_icon" src={Youtube} />
        </Link>
      </div>
      <div className="flex  col-span-10 justify-center">
        <form className="w-1/2 relative" onSubmit={(e) => handleFormSubmit(e)}>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-8 h-full border  border-gray-400 rounded-l-full"
            value={searchText}
            onChange={(e) => {
              handleSearch(e);
            }}
          />

          {showSuggestion && searchText && (
            <div className="absolute left-0 right-0 bg-white rounded-lg border border-gray-300">
              {suggestion
                .filter((s) => {
                  const VALUE = value.toLowerCase();
                  const SEARCH = searchText.toLowerCase();
                  return VALUE != SEARCH;
                })
                .map((s) => {
                  return (
                    <div
                      className="flex items-center hover:bg-gray-200"
                      key={s}
                    >
                      <img
                        src="https://www.svgrepo.com/show/7109/search.svg"
                        alt="search_icon"
                        className="h-4 m-3"
                      />
                      <div
                        onClick={() => {
                          setValue({ s }.s);
                          setSearchText({ s }.s);
                          console.log("Value is " + value);
                          console.log("Search Text is  " + searchText);
                          console.log({ s }.s);
                        }}
                      >
                        {s}
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </form>

        <div className="border border-gray-400 rounded-r-full py-3 pl-3 pr-6">
          <Link to="/search">
            <img
              src="https://www.svgrepo.com/show/7109/search.svg"
              alt="search_icon"
              className="h-5"
            />
          </Link>
        </div>

        <div className="border border-gray-400 rounded-full text-center ml-4 w-12 h-12 flex items-center justify-center">
          <img src={VoiceSearch} alt="voice_search icon" className="h-8" />
        </div>
      </div>

      <div className="flex justify-between col-span-1">
        <img src={Upload} alt="upload_icon" className="h-8" />
        <img src={Notification} alt="notification_icon" className="h-8" />
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user_icon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
