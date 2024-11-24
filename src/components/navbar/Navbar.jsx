import React from "react";
import "./navbar.css";
import home from "../../images/home.svg";
import logo from "../../images/TestLogo.png";
import patient from "../../images/patinet.svg";
import schedule from "../../images/calender.svg";
import chat from "../../images/chat.svg";
import credit from "../../images/credit.svg";
import profile from "../../images/profile-smile.png";
import setting from "../../images/setting.svg";
import vertical from "../../images/vertical.svg";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="center">
            <div className="home">
              <a href="/">
                <img src={home} alt="home-logo" />
              </a>
              <div> Overview</div>
            </div>
            <div className="patient">
              <a href="/">
                <img src={patient} alt="group-logo" />
              </a>
              <div> Patients</div>
            </div>
            <div className="schedule">
              <a href="/">
                <img src={schedule} alt="cal-logo" />
              </a>
              <div> Schedule</div>
            </div>
            <div className="message">
              <a href="/">
                <img src={chat} alt="chat-logo" />
              </a>
              <div> Message</div>
            </div>
            <div className="tran">
              <a href="/">
                <img src={credit} alt="tran-logo" />
              </a>
              <div> Transcation</div>
            </div>
          </div>
          <div className="profile">
            <div className="left">
              <div className="profile-img">
                <img src={profile} alt="profile-logo" />
              </div>
              <div className="profile-name">
                <h5>Dr. Josh Simmons</h5>
                <h6>General Pracitioner</h6>
              </div>
            </div>
            <div className="divider"></div>
            <div className="right">
              <div className="setting-logo">
                <img src={setting} alt="setting-logo" />
                <img src={vertical} alt="vertical-logo" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
