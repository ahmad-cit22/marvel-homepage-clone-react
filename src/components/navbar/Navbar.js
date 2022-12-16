import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { RiEyeCloseLine } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { BeatLoader } from "react-spinners";


const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const auth = getAuth();
  const db = getDatabase();

  const navigate = useNavigate();
  let [passVisibility, setPassVisibility] = useState(false);

  let [loading, setLoading] = useState(false);

  let [userRegEmail, setUserRegEmail] = useState("");
  let [userRegName, setUserRegName] = useState("");
  let [userRegPass, setUserRegPass] = useState("");

  let [errEmail, setErrEmail] = useState("");
  let [errName, setErrName] = useState("");
  let [errPass, setErrPass] = useState("");

  let [fErrEmail, setFErrEmail] = useState("");

  let [successMsg, setSuccessMsg] = useState("");

  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validName = /^[A-z\s]+$/;
  const validPassU = /[A-Z]/;
  const validPassL = /[a-z]/;
  const validPassD = /[0-9]/;
  const validPassS = /[^\w]/;

  const validPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w])/;

  const handleEmail = (e) => {
    setUserRegEmail(e.target.value);
    setErrEmail("");
    setFErrEmail("");
    setSuccessMsg("");
  };
  const handleName = (e) => {
    setUserRegName(e.target.value);
    setErrName("");
    setSuccessMsg("");
  };
  const handlePass = (e) => {
    setUserRegPass(e.target.value);
    setErrPass("");
    setSuccessMsg("");
  };

  const passShowHide = () => {
    setPassVisibility(!passVisibility);
  };

  return (
    <>
      {/* navbar */}
      <nav className="font-bold uppercase text-center bg-[#202020] font-robo text-[13px] text-white border-b-[0.2px] border-solid border-white/20">
        <div className=" max-w-container mx-auto relative">
          <div className="flex flex-col items-center justify-center lg:flex-row gap-4 md:gap-7 lg:gap-10 xl:gap-12 linear duration-300 my-6 md:my-9 lg:my-0">
            <div className="flex items-center justify-center gap-x-2 w-1/6">
              <button className="uppercase hover:text-hoverPrimary linear duration-300 cursor-pointer">
                Sign In
              </button>
              <span>|</span>
              <button className="uppercase hover:text-hoverPrimary linear duration-300 cursor-pointer" onClick={()=> setShowJoinModal(true)}>
                Join
              </button>
            </div>

            <div className="w-4/6 flex items-center justify-center">
              <a href="#" className="w-1/6 block mx-auto">
                <picture>
                  <img
                    src="images/Marvel_Logo.svg"
                    className="w-full"
                    loading="lazy"
                  />
                </picture>
              </a>
            </div>

            <div className="w-[13%] flex items-center justify-start">
              <a href="#" className="w-[18%] block mx-auto">
                <picture>
                  <img
                    src="images/icon-mu-shield.png"
                    className="w-full"
                    loading="lazy"
                  />
                </picture>
              </a>
              <div className="w-[89%] block mx-auto hover:text-hoverPrimary linear duration-300 cursor-pointer">
                <p className="">Marvel Unlimited</p>
                <p className="text-[11px]">Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* nav footer part */}
      <nav className="font-bold uppercase text-center bg-[#202020] font-robo text-[13px] text-white/60">
        <div className="max-w-container mx-auto relative linear duration-300 w-4/5 flex items-center justify-center font-semibold py-2.5">
          <ul className="cursor-pointer list-none flex flex-col lg:flex-row gap-4 md:gap-7 lg:gap-10 xl:gap-12 linear duration-300 my-4 md:my-7 lg:my-0">
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">News</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">Comics</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">Characters</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">Movies</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">TV Shows</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">Games</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">Videos</a>
            </li>
            <li className="linear relative duration-300 hover:text-white hover:after:[''] hover:after:absolute hover:after:w-full hover:lg:after:h-[3px] after:bg-[red] after:bottom-[-10px] after:right-0 after:linear after:duration-300">
              <a href="#">More</a>
            </li>
          </ul>
        </div>

        {/* ========== Create Group modal starts ========== */}
        <div
          className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/70 z-[22] ${
            showJoinModal ? "block" : "hidden"
          } animate-[smooth.3s_ease_1] grid place-items-center`}
        >
          <div className="relative  w-[90%] md:w-2/5 bg-white text-center py-6 md:py-10 px-2 md:px-6 rounded-md animate-[popUp_.3s_ease_1]">
            asdasdasd
            {/* <h2 className="text-primary text-2xl md:text-[32px] leading-none font-semibold mb-12">
              Create New Group
            </h2>
            <form className="w-4/5 m-auto" ref={refCreateGroupFrom}>
              <input
                type={"text"}
                className="w-full py-2 md:py-3 px-2.5 md:px-4 rounded-md border-[1.5px] border-primary text-sm md:text-lg text-primary font-semibold outline-0 focus:border-focus linear duration-300 z-10"
                placeholder="Group Name"
                onChange={handleGName}
              />
              {grpNameErrMsg !== "" && (
                <p className="pt-[2px] pl-1 text-sm text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1] text-left">
                  {grpNameErrMsg}
                </p>
              )}
              {grpNameFErrMsg !== "" && (
                <p className="pt-[2px] pl-1 text-sm text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1] text-left">
                  {grpNameFErrMsg}
                </p>
              )}

              <input
                type={"text"}
                className="w-full mt-4 py-2 md:py-3 px-2.5 md:px-4 rounded-md border-[1.5px] border-primary text-sm md:text-lg text-primary outline-0 focus:border-focus linear duration-300 z-10"
                placeholder="Group Tag"
                onChange={handleGTag}
              />

              {grpTagErrMsg !== "" && (
                <p className="pt-[2px] pl-1 text-sm text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1] text-left">
                  {grpTagErrMsg}
                </p>
              )}
              {grpTagFErrMsg !== "" && (
                <p className="pt-[2px] pl-1 text-sm text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1] text-left">
                  {grpTagFErrMsg}
                </p>
              )}
              {grpSuccessMsg !== "" && (
                <p className="pt-[3px] pl-1 text-base md:text-lg text-[green] font-semibold animate-[popDown_.4s_ease_1] text-left">
                  {grpSuccessMsg}
                </p>
              )}
              <RiCloseFill
                className={
                  "text-3xl md:text-[40px] mr-[1px] mt-[2px] text-primaryTwo/70 hover:text-primaryTwo linear duration-300 rounded-full font-semibold cursor-pointer absolute top-0 right-0"
                }
                onClick={closeModal}
              />
              <Button
                customClass={`${
                  loading ? "opacity-70 hover:bg-primary" : ""
                } py-1 md:py-2 px-4 mt-6 md:mt-8 md:w-[50%] text-sm md:text-xl leading-[40px] rounded-md font-semibold`}
                text={`${isCompleted ? "Done" : "Create Group"}`}
                btnDisable={loading}
                clickAct={handleGrpSubmit}
                Loader={BeatLoader}
                loadingStatus={false}
              />
            </form> */}
          </div>
        </div>
        {/* // ========== Create Group modal ends ==========  */}
      </nav>
      {/* nav footer part */}

      {/* navbar */}
    </>
  );
};

export default Navbar;
