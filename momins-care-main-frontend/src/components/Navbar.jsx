import React, { useEffect, useState } from "react";
import MominsCareLogo from "../assets/MOMINS-CARE-LOGO-v2.png";
import ProfileUserImg from "../assets/profile-user.svg";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isWindowUnder1100, setIsWindowUnder1100] = useState(
    window.innerWidth <= 1100
  );

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showNav]);

  useEffect(() => {
    setIsWindowUnder1100(window.innerWidth <= 1100);
  }, []);

  return (
    <>
      <nav className="bg-white py-2">
        <div className="w-[80%] mx-auto px-5 sm:px-6 lg:px-8 nav-container">
          <div className="  flex items-center justify-between h-16">
            <div className="flex items-center nav-left-part">
              <div className="flex-shrink-0">
                <a href="/dashboard">
                  <img
                    src={MominsCareLogo}
                    alt="Logo"
                    className="responsive-image"
                    className="Nav-logo"
                    style={{}}
                  />
                </a>
              </div>
            </div>
            {/* */}
            <div className="nav-btns">
              {showNav ? (
                <IoMdClose
                  className="text-2xl text-black cursor-pointer"
                  onClick={() => setShowNav(!showNav)}
                />
              ) : (
                <FaBars
                  className="text-2xl text-black cursor-pointer"
                  onClick={() => setShowNav(!showNav)}
                />
              )}
            </div>
            <div
              className={`block nav-right-part ${
                isWindowUnder1100 === true && showNav === true
                  ? "translate-x-0"
                  : isWindowUnder1100 === true && showNav === false
                  ? "-translate-x-full"
                  : ""
              }`}
            >
              <div className="ml-4 flex items-center md:ml-6">
                <a
                  href="/dashboard#subject-list"
                  className="text-black hover:bg-sky-950 hover:text-white px-4 py-2 rounded-md text-m font-medium"
                  onClick={() => setShowNav(false)}
                >
                  Regular Exam
                </a>
                <a
                  href="/leaderboard"
                  className="text-black hover:bg-sky-950 hover:text-white px-4 py-2 rounded-md text-m font-medium"
                  onClick={() => setShowNav(false)}
                >
                  Leaderboard
                </a>
                <a
                  href="/past-exams"
                  className="text-black hover:bg-sky-950 hover:text-white px-4 py-2 rounded-md text-m font-medium"
                  onClick={() => setShowNav(false)}
                >
                  Past Exam
                </a>
                <a
                  href="/profile"
                  className="text-black hover:bg-sky-950 hover:text-white px-4 py-2 rounded-md text-m font-medium flex flex-row items-center justify-center"
                  onClick={() => setShowNav(false)}
                >
                  <img
                    className="profile-img"
                    src={
                      "https://play-lh.googleusercontent.com/3ha-TO-wWZA8IofnlU6tWsYJiBCYbqs8hvhB6BQnct1PgsYpAZhCPMKoYggHOX9z-1qM=w526-h296-rw"
                    }
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />{" "}
                  {/*My Account*/}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
