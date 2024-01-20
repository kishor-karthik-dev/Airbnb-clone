import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./styles.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";
import { useState } from "react";
function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        { !showSearchBar &&

          <div className="search-bar-text2">Add guests </div>
        }
        {showSearchBar && <input placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} style={{border:"0px brown solid"}}></input>}
        
        <div className="search-icon-div" onClick={()=>{setShowSearchBar(!showSearchBar)}}>
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageIcon sx={{ fontSize: "1.3rem" }} />
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
