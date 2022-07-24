import React, { useState } from "react";
import name from "../assets/nm.ogg";

export default function Hero({isActive, toggler, isToggle}) {
  

  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  let nameaudio = new Audio(name);

  const btnHR = () => {
    nameaudio.play();
  };

  return (
    <>
      <nav
        id="navbar"
        className={` w-full transition-all py-2 sticky top-0 z-50 flex items-center justify-center ${scroll ? "translate-y-0 " : "-translate-y-full"}`}
      >
        <h1 className={`font-monu font-bold tracking-wider text-2xl ${isActive? 'text-white' : 'text-black '}`}>HK</h1>
      </nav>

      <section
        className={`${
          isActive ? "bg-black text-white" : "bg-white text-gray-800"
        } pb-4 font-sf `}
      >
        <div
          className={`min-h-screen w-full font-sf pl-6 pr-10 md:pl-20 pt-6 md:pt-28 pb-8 md:pb-10 flex flex-col gap-12  ${
            isActive ? "bg-black text-white" : "bg-white text-gray-800"
          } `}
        >
          <div className="name flex flex-col">
            <div className="flex justify-between">
              <div className="name-content">
                <h1 className="font-bold text-2xl flex items-center gap-2">
                  <h1>Haris Kumar</h1>

                  <button
                    onClick={btnHR}
                    className={`p-1 rounded-full flex justify-center ${
                      isActive ? "bg-white" : "bg-black"
                    } items-center grid place-items-center opacity-70 hover:opacity-90`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isActive ? "black" : "white"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  </button>
                </h1>
                <p className="text-lg font-medium">
                  Physicist who builds blazing websites
                </p>
              </div>

              <button
                onClick={isToggle}
                className={`md:h-8 md:w-8 w-7 h-7 top-20 bg-gray-600 outline-none rounded-full flex border-4 ${
                  isActive ? "border-white" : "border-gray-300"
                } lg:mr-20`}
              >
                <div
                  className={`${
                    isActive ? "bg-white" : "bg-black"
                  } w-1/2 rounded-l-full h-full`}
                ></div>

                <div
                  className={`${
                    isActive ? "bg-black" : "bg-white"
                  } w-1/2 rounded-r-full h-full`}
                ></div>
              </button>
            </div>
            <hr className="opacity-30 w- md:w-1/2 mt-7" />
          </div>

          <div className="about flex flex-col gap-3 lg:w-3/4 font-medium">
            <h1 className="font-bold text-2xl">About</h1>
            <p className="text-xl mt-2">
              I'm a Undergraduate student in Physics who is curious to explore
              web technologies and also build Blazing Websites. Also curious to
              explore the Web3 world . Also Interested in Crypto, De-Fi.{" "}
            </p>
            <p className="text-xl mt-5">
              I live in Chennai, IN . Creating educational content in{" "}
              <a
                className="text-blue-500 hover:text-blue-700 "
                href="https://instagram.com/four39_codes"
              >
                Instagram
              </a>{" "}
              and in Twitter at{" "}
              <a
                className="text-blue-500 hover:text-blue-700 "
                href="https://www.twitter.com/Haris_Eth"
              >
                @Haris_ETH
              </a>{" "}
              and{" "}
              <a
                className="text-blue-500 hover:text-blue-700 "
                href="https://www.twitter.com/four39_codes"
              >
                @Four39_Codes
              </a>
              .
            </p>

            <div className="links flex mt-4 space-x-8 ">
              <a
                className="text-xl hover:text-blue-600"
                href="https://www.github.com/HarisETH"
              >
                Github
              </a>

              <a
                className="text-xl  hover:text-blue-600"
                href="https://www.fueler.io/haris_one"
              >
                Fueler
              </a>

              <a
                className="text-xl  hover:text-blue-600"
                href="https://www.twitter.com/Haris_ETH"
              >
                Twitter
              </a>
              <a
                className="text-xl hover:text-blue-600"
                href="https://peerlist.io/haris"
              >
                PeerList
              </a>
            </div>
          </div>
          <hr className={`${isActive ? "opacity-30" : "opacity-100"} `} />
          <div className="skills flex flex-col">
            <h1 className="text-2xl font-bold">Skills</h1>

            <ul className="font-medium mt-5 ml-px text-xl flex flex-col gap-2 ">
              <li>Web Development</li>
              <li>UI Designing</li>
              <li>Blogging</li>
              <li>CopyWriting</li>
              <li>Content Creation</li>
            </ul>
          </div>

          <hr className={`${isActive ? "opacity-30" : "opacity-100"} `} />

          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Languages known</h1>

            <div className="flex">
              <ul className="linguals flex flex-col gap-3 font-medium border-opacity-25 text-xl mt-5 border-r-2 border-r-gray-300 pr-2 sm:pr-5">
                <li>Tamil</li>
                <li>English</li>
                <li>
                  Hindi <span>(in Progress)</span>
                </li>
              </ul>

              <ul className="progLangs flex flex-col gap-3 font-medium text-xl mt-5 ml-3 sm:ml-5">
                <li>HTML / CSS</li>
                <li>Javascript</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>

          <hr className="opacity-30" />

          <div className="flex flex-col now">
            <h1 className="text-2xl font-bold">Now</h1>
            <p className="font-medium text-xl tracking-tight mt-4">
              Focused on{" "}
              <span className="font-semibold italic">
                reading, learning and building
              </span>
              . Learning to work carefully and methodically. Mindful of my time
              so that I can produce quality work and feel productive.
            </p>

            <p className="font-medium text-xl tracking-tight mt-4">
              Learning by Building using tradiitional and latest Web technologies to further enhance my developer
              skills and deliver worthy content to my audience.
            </p>
          </div>

          <hr className={`${isActive ? "opacity-30" : "opacity-100"} `} />

          <div className="stack flex flex-col">
            <h1 className="text-2xl font-bold">My Tech Stack</h1>

            <ul className="flex flex-col gap-3 font-medium mt-5 text-xl">
              <li>HTML + CSS</li>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>Javascript</li>
              <li>ReactJS</li>
              <li>Zustand</li>
              <li>TypeScript</li>
              <li>Git / Github</li>
              <li>NextJS</li>
            </ul>
          </div>

          <hr className={`${isActive ? "opacity-30" : "opacity-100"} `} />

          <div className="connect flex flex-col">
            <h1 className="text-2xl font-bold">Connect</h1>

            <p className="text-xl font-medium mt-5">
              You can contact me for projects via{" "}
              <a
                href="mailto:hariskumar.eth@gmail.com"
                className={`text-blue-500`}
              >
                hariskumar.eth@gmail.com
              </a>
            </p>

            <p className="text-xl font-medium mt-3">
              Connect with me on
              <a
                href="https://www.instagram.com/four39_codes"
                className="text-blue-500"
              >
                {" "}
                Instagram
              </a>{" "}
              and
              <a
                href="https://www.twitter.com/haris_eth"
                className="text-blue-500"
              >
                {" "}
                Twitter
              </a>
            </p>

            <div className="flex gap-3 text-xl font-medium   mt-6 ml-px">
              <a
                href="https://links.haris.one"
                target="_blank"
                className="hover:text-blue-600 flex items-center text-xl italic"
              >
                Links
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a
                href="https://www.github.com/HarisETH"
                className="hover:text-blue-600 flex items-center text-xl italic"
              >
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-arrow-up-right"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className={`${isActive ? "opacity-30" : "opacity-100"}`} />

        <footer className="flex justify-between px-6 md:px-20 mt-4 h-full w-full">
          <h1 className="text-md md:text-lg cursor-pointer italic font-semibold text-gray-500">
            © Four39.one
          </h1>

          <h1 className="text-md md:text-lg cursor-pointer italic font-semibold text-gray-500">
            © Haris.one
          </h1>
        </footer>
      </section>
    </>
  );
}
