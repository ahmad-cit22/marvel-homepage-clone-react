import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube, BsSnapchat, BsPinterest } from "react-icons/bs";
import { ImTumblr2 } from "react-icons/im";
import { TbBrandInstagram } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-10 xl:pt-16 bg-primary font-robo">
      <div className="py-5 font-pop text-white max-w-container mx-auto px-3 md:px-5 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-[90px] xl:gap-x-8 justify-start items-center text-white/80 text-[15px]">
          <a href="#" className="w-[12%] block mx-auto">
            <picture>
              <img
                src="images/logo-M.png"
                className="w-[90px] h-[100px]"
                loading="lazy"
              />
            </picture>
          </a>
          <div className="w-1/6 font-bold">
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              ABOUT MARVEL
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              HELP/FAQS{" "}
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              CAREERS{" "}
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              INTERNSHIPS
            </a>
          </div>
          <div className="w-1/6">
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              ADVERTISING
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              DISNEY+
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              MARVELHQ.COM
            </a>
            <a
              href="#"
              className="cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              REDEEM DIGITAL COMICS
            </a>
          </div>
          <div className="w-2/6 font-bold text-sm">
            <a
              href="#"
              className="flex items-center justify-center gap-x-6 cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              <picture>
                <img
                  src="images/marvel_insider.png"
                  className="w-[4vw]"
                  loading="lazy"
                />
              </picture>
              <div>
                <p className="cursor-pointer hover:text-white linear duration-300 block mb-1">
                  MARVEL INSIDER
                </p>
                <p className="cursor-pointer text-white/50 font-normal linear duration-300 block mb-1">
                  Get Rewarded for Being a Marvel Fan
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-x-5 cursor-pointer hover:text-white linear duration-300 block mb-1"
            >
              <picture>
                <img
                  src="images/mu-logo.png"
                  className="w-[4vw]"
                  loading="lazy"
                />
              </picture>
              <div>
                <p className="cursor-pointer hover:text-white linear duration-300 block mb-1">
                  MARVEL UNLIMITED
                </p>
                <p className="cursor-pointer text-white/50 font-normal linear duration-300 block mb-1">
                  Access Over 30,000+ Digital Comics
                </p>
              </div>
            </a>
          </div>
          <div className="w-1/6 font-bold">
            <p className="cursor-pointer hover:text-white linear duration-300 mb-1">
              FOLLOW MARVEL
            </p>
            <div className="mt-5 text-white/60 flex items-center justify-start flex-wrap gap-x-7 gap-y-5 text-xl w-">
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                <BsYoutube />{" "}
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                <TiSocialTwitter />{" "}
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                <TbBrandInstagram />{" "}
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                <BsSnapchat />{" "}
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                <ImTumblr2 />{" "}
              </a>
              <a
                href="#"
                className="cursor-pointer hover:text-white linear duration-300 block"
              >
                {" "}
                <BsPinterest />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-20 text-center flex gap-x-2 lg:gap-x-4 flex-wrap items-center text-[#767676] max-w-container mx-auto px-3 md:px-5 lg:px-8 xl:px-0 w-[78%] gap-y-3 justify-center">
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Terms of Use
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Privacy Policy
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Your US State Privacy Rights
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Do Not Sell or Share My Personal Information
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Children
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            License Agreement
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Interest-Based Ads
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            Marvel Insider Terms
          </span>
          <span className="text-[13px] text-center hover:text-white cursor-pointer linear duration-300">
            ©2022 MARVEL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//
//
//
