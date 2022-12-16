import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const Banner = () => {
  const userData = useSelector((state) => state.userLoginInfo.userInfo);
  const [emailVerify, setEmailVerify] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  useEffect(() => {
    if (userData !== null && userData.emailVerified) {
      setEmailVerify(true);
    }
  }, []);

  return (
    userData !== null &&
    (emailVerify ? (
      <div>
        <Carousel
          responsive={responsive}
          keyBoardControl={true}
          infinite={true}
        >
          <div
            className="relative w-screen bg-cover bg-no-repeat font-robo"
            style={{
              background: "url('images/backgrounds/bg-2.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/60 text-white font-bold px-28 py-36">
              <p className="mb-10">'SINS OF SINISTER' </p>
              <h1 className="text-5xl mb-10 w-[60%]">
                THE FUTURE OF THE MARVEL UNIVERSE BELONGS TO MISTER SINISTER
              </h1>
              <a
                href="#"
                className="inline-block linear duration-300 py-3 text-primary hover:text-white px-8 bg-white/40 hover:bg-hoverPrimary/40"
              >
                NEXT MONTH!
              </a>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[4vw] bg-black blur-2xl"></div>
          </div>
          <div
            className="relative w-screen bg-cover bg-no-repeat font-robo"
            style={{
              background: "url('images/backgrounds/bg-3.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/60 text-white font-bold px-28 py-[168px]">
              <p className="mb-10"> BEST OF 2022 </p>
              <h1 className="text-5xl mb-10 w-[60%]">
                'IMMORTAL X-MEN': IGN'S BEST COMIC BOOK SERIES OF THE YEAR
              </h1>
              <a
                href="#"
                className="inline-block linear duration-300 py-3 text-primary hover:text-white px-8 bg-white/40 hover:bg-hoverPrimary/40"
              >
                READ NOW!
              </a>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[4vw] bg-black blur-2xl"></div>
          </div>
          <div
            className="relative w-screen bg-cover bg-no-repeat font-robo"
            style={{
              background: "url('images/backgrounds/bg-1.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/60 text-white font-bold px-28 py-36">
              <p className="mb-10">THIS FEBRUARY</p>
              <h1 className="text-5xl mb-10 w-[60%]">
                MCU VARIANT COVERS CELEBRATE THE EPIC FILMS OF THE INFINITY SAGA
              </h1>
              <a
                href="#"
                className="inline-block linear duration-300 py-3 text-primary hover:text-white px-8 bg-white/40 hover:bg-hoverPrimary/40"
              >
                FIRST LOOK!
              </a>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[4vw] bg-black blur-2xl"></div>
          </div>
          <div
            className="relative w-screen bg-cover bg-no-repeat font-robo"
            style={{
              background: "url('images/backgrounds/bg-4.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/60 text-white font-bold px-28 py-36">
              <p className="mb-10">FIRST LOOK</p>
              <h1 className="text-5xl mb-10 w-[60%]">
                'WASP' #1 PITS JANET & NADIA AGAINST A CLASSIC SUPER VILLAIN
              </h1>
              <a
                href="#"
                className="inline-block linear duration-300 py-3 text-primary hover:text-white px-8 bg-white/40 hover:bg-hoverPrimary/40"
              >
                PREVIEW!
              </a>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[4vw] bg-black blur-2xl"></div>
          </div>
        </Carousel>
      </div>
    ) : (
      <div className="bg-primary">
        <p className="text-3xl w-[70%] mx-auto text-center text-white pt-16 font-robo">
          Hello there! If you are new here, please create an account first by
          clicking the on 'Join' button in the navigation bar above. & after
          that, verify your email using the link sent to your email and then
          sign in.
        </p>
        <p className="text-2xl w-[70%] mx-auto text-center text-hoverPrimary pt-5 pb-16 font-robo">
          Without email verification and signing in you can not see the
          carousel.
        </p>
      </div>
    ))
  );
};

export default Banner;
