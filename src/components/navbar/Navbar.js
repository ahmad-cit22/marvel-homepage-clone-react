import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
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
  const auth = getAuth();
  const db = getDatabase();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [passVisibility, setPassVisibility] = useState(false);

  const [loading, setLoading] = useState(false);

  const [userRegEmail, setUserRegEmail] = useState("");
  const [userRegName, setUserRegName] = useState("");
  const [userRegPass, setUserRegPass] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errName, setErrName] = useState("");
  const [errPass, setErrPass] = useState("");

  const [fErrEmail, setFErrEmail] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

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

  const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (!userRegEmail) {
    //     setErrEmail("You must enter your email address!");
    //   } else if (!validEmail.test(userRegEmail)) {
    //     setErrEmail("You must enter a valid email address!");
    //   }
    //   if (!userRegName) {
    //     setErrName("You must enter your full name!");
    //   } else if (!validName.test(userRegName)) {
    //     setErrName("Your name can't contain any number or special characters!");
    //   } else if (userRegName.split(" ").length < 2) {
    //     setErrName("You must enter both your first name and last name!");
    //   } else if (userRegName.length < 4) {
    //     setErrName("Your name must contain at least 4 characters!");
    //   }
    //   if (!userRegPass) {
    //     setErrPass("You must create a password for your account!");
    //   } else if (!validPassU.test(userRegPass)) {
    //     setErrPass("Password must contain at least one uppercase character!");
    //   } else if (!validPassL.test(userRegPass)) {
    //     setErrPass("Password must contain at least one lowercase character!");
    //   } else if (!validPassD.test(userRegPass)) {
    //     setErrPass("Password must contain at least one digit!");
    //   } else if (!validPassS.test(userRegPass)) {
    //     setErrPass("Password must contain at least one special character!");
    //   } else if (userRegPass.length < 8 || userRegPass.length > 16) {
    //     setErrPass("Password length must be between 8 to 16 characters!");
    //   }
    //   if (
    //     userRegEmail &&
    //     userRegName &&
    //     userRegPass &&
    //     validEmail.test(userRegEmail) &&
    //     validName.test(userRegName) &&
    //     userRegName.split(" ").length >= 2 &&
    //     userRegName.length > 4 &&
    //     validPass.test(userRegPass) &&
    //     userRegPass.length > 7 &&
    //     userRegPass.length < 17
    //   ) {
    //     setLoading(true);
    //     createUserWithEmailAndPassword(auth, userRegEmail, userRegPass)
    //       .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         console.log(user);
    //         updateProfile(auth.currentUser, {
    //           displayName: userRegName,
    //           photoURL: "images/default_avatar.png",
    //         })
    //           .then(() => {
    //             console.log("Profile Updated!");
    //             sendEmailVerification(auth.currentUser)
    //               .then(() => {
    //                 console.log("sent");
    //                 setSuccessMsg(
    //                   "Registration successful! Check your email for the verification link."
    //                 );
    //               })
    //               .then(() => {
    //                 let userRef = ref(db, "users/" + user.uid);
    //                 set(userRef, {
    //                   fullName: user.displayName,
    //                   email: user.email,
    //                   profile_picture: user.photoURL,
    //                 }).then(() => {
    //                   console.log("done");
    //                   setTimeout(() => {
    //                     navigate("/login");
    //                     setLoading(false);
    //                   }, 1500);
    //                 });
    //               });
    //           })
    //           .catch((error) => {
    //             console.log(error.code);
    //           });
    //       })
    //       .catch((error) => {
    //         setLoading(false);
    //         const errorCode = error.code;
    //         if (errorCode.includes("auth/email-already-in-use")) {
    //           setFErrEmail("Sorry! This Email has already been registered.");
    //         } else if (errorCode.includes("auth/network-request-failed")) {
    //           setErrPass("Network error! Check your connection pls.");
    //         }
    //         console.log(errorCode);
    //         // const errorMessage = error.message;
    //       });
    //   }
    //   //  else {
    //   //    createUserWithEmailAndPassword(auth, userRegEmail, userRegPass)
    //   //      .then((userCredential) => {
    //   //        // Signed in
    //   //        const user = userCredential.user;
    //   //        console.log(userCredential);
    //   //        console.log(user);
    //   //        // ...
    //   //      })
    //   //      .catch((error) => {
    //   //        const errorCode = error.code;
    //   //        const errorMessage = error.message;
    //   //        // ..
    //   //      });
    //   // setSuccessMsg("Registration done!");
    //   //  }
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
              <button
                className="uppercase hover:text-hoverPrimary linear duration-300 cursor-pointer"
                onClick={() => setShowJoinModal(true)}
              >
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
          <div className="relative  w-[90%] md:w-2/5 bg-white text-center py-6 md:py-6 px-2 md:px-6 rounded-md animate-[popUp_.3s_ease_1] font-robo">
            <picture className="block mx-auto w-1/4 mb-4">
              <img src="images/logo.png" className="" loading="lazy" />
            </picture>
            <h2 className="text-hoverPrimary text-2xl md:text-[32px] leading-none font-semibold mb-12">
              Create Your Account
            </h2>

            {/* ========== Registration form starts ========== */}
            <form
              action="#"
              method="POST"
              className="flex flex-col gap-y-3 w-3/4 md:w-3/5 m-auto lg:w-[370px] xl:w-[380px] mb-3.5 md:mb-4 lg:mb-3 xl:mb-5"
            >
              <div className="relative">
                <input
                  type={"email"}
                  className="w-full py-2 md:py-3 font-normal px-2.5 md:px-4 rounded-sm border-[1.5px] border-primary text-sm md:text-lg text-[black] outline-0 focus:border-hoverPrimary linear duration-300 z-10"
                  placeholder="Enter Your Email"
                  onChange={handleEmail}
                  autoFocus
                />
                <p className={``}>Email Address</p>
                {errEmail !== "" && (
                  <p className="xl:pt-[1px] text-[13px] md:text-lg lg:text-base pl-1 md:pl-4 lg:pl-1 text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1]">
                    {errEmail}
                  </p>
                )}
                {fErrEmail !== "" && (
                  <p className="xl:pt-[1px] text-[13px] md:text-lg lg:text-base pl-1 md:pl-4 lg:pl-1 text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1]">
                    {fErrEmail}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={"text"}
                  className="w-full py-2 md:py-3 font-normal px-2.5 md:px-4 rounded-sm border-[1.5px] border-primary text-sm md:text-lg text-[black] outline-0 focus:border-hoverPrimary linear duration-300 z-10"
                  placeholder="Enter Your Name"
                  onChange={handleName}
                />
                <p className={``}>Full Name</p>
                {errName !== "" && (
                  <p className="xl:pt-[1px] text-[13px] md:text-lg lg:text-base pl-1 md:pl-4 lg:pl-1 text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1]">
                    {errName}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  type={`${passVisibility ? "text" : "password"}`}
                  className="w-full py-2 md:py-3 font-normal px-2.5 md:px-4 rounded-sm border-[1.5px] border-primary text-sm md:text-lg text-[black] outline-0 focus:border-hoverPrimary linear duration-300 z-10"
                  placeholder="Create a Strong Password"
                  onChange={handlePass}
                />
                <p className={""}>Password</p>
                {passVisibility ? (
                  <RiEyeFill
                    className="absolute top-[17px] md:top-7 lg:top-6 right-4 md:right-8 lg:right-6 text-[22px] md:text-[28px] opacity-60 cursor-pointer hover:opacity-80 linear duration-300"
                    onClick={passShowHide}
                  />
                ) : (
                  <RiEyeCloseLine
                    className="absolute top-[17px] md:top-7 lg:top-6 right-4 md:right-8 lg:right-6 text-[22px] md:!text-[28px] opacity-60 cursor-pointer hover:opacity-80 linear duration-300"
                    onClick={passShowHide}
                  />
                )}
                {errPass !== "" && (
                  <p className="xl:pt-[1px] text-[13px] md:text-lg lg:text-base pl-1 md:pl-4 lg:pl-1 text-[red]/90 font-semibold animate-[popUpY_.4s_ease_1]">
                    {errPass}
                  </p>
                )}
              </div>
              <div>
                <button
                  className={`py-3.5 md:py-6 lg:py-3.5 w-full md:w-[95%] block m-auto lg:w-full md:text-xl rounded-sm font-semibold mb-1 text-white bg-hoverPrimary/80 hover:bg-hoverPrimary md:mb-3 linear duration-300`}
                  clickAct={handleSubmit}
                >
                  Create Account
                </button>
              </div>
            </form>
            <p className="font-normal text-center text-black/80 text-xs md:text-[16.5px] lg:text-base me-2">
              Already have an account ?{" "}
              <span className="cursor-pointer text-hoverPrimary/80 hover:text-hoverPrimary">
                Sign In
              </span>
            </p>
            {/* ========== Registration form ends ========== */}
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
