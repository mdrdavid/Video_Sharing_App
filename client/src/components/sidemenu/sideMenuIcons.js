
import React from "react";

import { AiFillHome } from "react-icons/ai";
import { MdExplore,} from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { MdOutlineLocalMovies } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import { BsTrophy } from "react-icons/bs"
import { FiMusic } from "react-icons/fi";
import { MdWebAsset } from "react-icons/md";
import { SiSololearn } from "react-icons/si";
import { FaAppleAlt } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineReport } from "react-icons/md";

const getIcon = (iconName) => {
  let icon = null;
  switch (iconName) {
    case "home":
      icon = <AiFillHome />
      break;
    case "explore":
      icon = <MdExplore />;
      break;
    case "subscription":
      icon = <MdOutlineSubscriptions />;
      break;
    case "library":
      icon = <MdOutlineVideoLibrary />
      break;
    case "history":
      icon = <MdHistory />
      break;
    case "watch":
      icon = <MdOutlineWatchLater />;
      break;
    case "videos":
      icon = <BiLike />
      break;
    case "jsturtorial":
      icon = <DiJavascript1 />
      break;
    case "simplearn":
      icon = <SiSololearn />
      break;
    case "nollywood":
      icon = <FaAppleAlt />;
      break;
    case "setindia":
      icon = <MdWebAsset/>;
      break;
    case "music":
      icon = <FiMusic />;
      break;
    case "tv":
      icon = <MdOutlineSubscriptions />;
      break;
    case "movie":
      icon = <MdOutlineLocalMovies />
      break;
    case "gaming":
      icon = <HiOutlineDocumentReport />;
      break;
    case "live":
      icon = <MdOutlineSubscriptions />;
      break;
    case "sports":
      icon = <BsTrophy />;
      break;
      case "settings":
      icon = <AiOutlineSetting />
      break;
    case "report":
      icon = <MdOutlineReport />;
      break;
    case "help":
      icon = <IoIosHelpCircleOutline />;
      break;
      case "feedback":
      icon = <MdOutlineFeedback />;
      break;
    default:
      break;
  }
  return icon
}

export const Sidelinks = (props) => {
  const { link: { icon, name }, } = props

  return (
    <div className="sideLink">
      <div className= "icons">{getIcon(icon)}{name}</div>
    </div>
  
  )
};

