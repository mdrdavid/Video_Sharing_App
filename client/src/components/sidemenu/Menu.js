
import React from "react";
import "./menu.css";
import { Sidelinks } from "../sidemenu/sideMenuIcons"
import Logo from "../navbar/Logo";

const sideBarLinks = {
  home: [{ name: "Home", icon: "home" }, { name: "Explore", icon: "explore" },
  { name: "Subscription", icon: "subscription" },],
  library: [{ name: "Library", icon: "library" }, { name: "History", icon: "history" },
  { name: "WatchLater", icon: "watch" }, { name: "Liked Videos", icon: "videos" },
  { name: "Javascript Turtorial", icon: "jsturtorial" },],
  subscription: [{ name: "Simplearn", icon: "simplearn" }, { name: "Nollywood", icon: "nollywood" },
  { name: "Set India", icon: "setindia" }, { name: "Music", icon: "music" }, { name: "Tv", icon: "tv" },],
  moreDetail: [{ name: "Movie", icon: "movie" }, { name: "Gaming", icon: "gaming" },
  { name: "Live", icon: "live" }, { name: "Sports", icon: "sports" },],
  settings: [{ name: "Settings", icon: "settings" }, { name: "Report History", icon: "report" }, { name: "Help", icon: "help" },
  { name: "Send Feedback", icon: "feedback" },]
}

const generateLinkContiner = () =>{
  const newContainer =[]
  for(const[,value] of Object.entries(sideBarLinks)){
  newContainer.push(
    <div className= "link-container">
    {value.map((link) => {
          return <Sidelinks link={link} />;
        })}
    </div>
  )
}
return newContainer
}


const Menu = () => {
  return (
    <>
      <div className="sidebar">
          <Logo/>
        {generateLinkContiner()}
      </div>
    </>
  );
};

export default Menu;