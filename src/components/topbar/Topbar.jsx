import "./topbar.scss";
import {IoIosMail} from  "react-icons/io";
import { BsFillTelephoneForwardFill} from "react-icons/bs";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen?"active": "")}>
      <div className="wrapper">
         <div className="left">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
          <a href="#intro" className="logo">
            {/* Wisdom */}
          </a>
        <div className="right">
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
            <a href="tel:+2348164940763"><BsFillTelephoneForwardFill className="icon" /></a>
            <a href="tel:+2348164940763"><span>+234 816 494 0763</span></a>
          </div>
          <div className="itemContainer">
            <a href="mailto:wisdom.ighofose@gmail.com"><IoIosMail className="icon" /></a>
            <a href="mailto:wisdom.ighofose@gmail.com"><span>wisdom.ighofose@gmail.com</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
