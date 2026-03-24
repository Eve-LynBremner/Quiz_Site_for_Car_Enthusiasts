import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroVideo from "../assets/videos/output2.mp4";
import { Link, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger, SplitText);

const LandingPage = () => {
  const videoRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  //create callback function for gsap animations
  useGSAP(() => {
    // gsap animations will go here

    //split text animation
    const heroSplit = new SplitText(".title", { type: "chars, words" });

    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      opacity: 0,
    });

    paraSplit.lines.forEach((line) => {
      line.classList.add("line");
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    //make a timeline

    //when the top of the video hits the center of the viewport, play the video if mobile
    //else when the center of the video hits 60% of the viewport height, play the video

    //second parameter is an empty array to run only once on mount

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      const duration = videoRef.current.duration - 0.2;
      videoRef.current.currentTime = 0;

      tl.to(videoRef.current, { currentTime: duration });
    };
  }, []);

  return (
    <>
      <div>
        <div className="fixed inset-0  -z-10">
          <video
            ref={videoRef}
            src={heroVideo}
            muted
            playsInline
            preload="auto"
            className="w-full md:h-[100%]  absolute bottom-0 left-0 md:object-contain object-bottom object-cover;"
          />
        </div>
        <section
          id="hero"
          className="relative z-10 min-h-dvh w-full border border-transparent "
        >
          <div className="noisy fixed inset-0 z-[100] pointer-events-none opacity-[0.03]" />
          <h1 className="title md:mt-32 mt-40 text-2xl md:text-[13vw] leading-none text-center font-bold text-white opacity-[65] tracking-tight">
            MotorMind
          </h1>

          <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
            <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto;">
              <div className="space-y-5 hidden md:block ">
                <h1 className="text-4xl"> Quiz for Car Enthusiasts</h1>
                <p className="subtitle text-5xl -mb-2 text-red-500">
                  Show Off Your Knowledge
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10  w-full border flex flex-col  border-transparent min-h-screen flex items-center justify-center">
          <div>
            <h1 className="text-5xl my-16 font-bold text-red-700">
              How much do you know about cars?{" "}
            </h1>
            <p className="text-3xl my-8 max-w-6/12">
              MotorMind offers a range of quizzes designed to test your
              knowledge of cars. Choose from a range of categories and
              difficulties, including brands, movies, logos, and general
              knowledge. It will help you understand how much you know about the
              world of cars and maybe even teach you something new.{" "}
            </p>
            <h1 className="text-3xl mb-8 text-red-600 text-shadow-red-500">
              Let’s find out if you’re a Rookie, Racer, or Pro
            </h1>
          </div>
          <div className="text-center space-y-8 p-16 mb-7 backdrop-blur-xl border border-white/10 rounded-2xl  max-w-5xl w-full ">
            <div className="flex flex-col sm:flex-row gap-4 justify-center h:200px">
              <button className="px-20 py-8 text-2xl md:text-3xl  bg-red-600 text-white font-bold transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:box-transition-all uppercase tracking-tighter">
                <Link to="/login">Login</Link>
              </button>
              <button className="px-20 py-8 text-2xl md:text-3xl border text-gray-500 bg-white border-white/20 transition-all duration-300 font-bold  hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:box-transition-all uppercase tracking-tighter">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
