import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import video3 from "../../../assets/video1.mp4";

const Banner = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    videoRefs.forEach((videoRef) => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    });
  }, []);

  return (
    <div className="">
      <div className="carousel w-full relative">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <video
            ref={videoRefs[0]}
            src={video1}
            className="lg:h-[715px] w-full object-cover"
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-blue-600 md:text-2xl">
              ❮
            </a>
            <a href="#slide2" className="text-blue-600 md:text-2xl">
              ❯
            </a>
          </div>
          <div className="absolute md:bottom-44 bg-gray-500 bottom-5 left-0 w-full bg-opacity-40 py-4">
            <Fade cascade damping={0.5}>
              <h2 className="md:text-2xl text-xs text-white text-center font-bold">
                Reliable, quick, and trustworthy-
                <span className="text-blue-600">
                  <Typewriter words={["my go-to pharmacy!"]} loop={0} />
                </span>
              </h2>
            </Fade>
          </div>
        </div>
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <video
            ref={videoRefs[1]}
            src={video2}
            className="lg:h-[715px] w-full object-cover"
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-blue-600 md:text-2xl">
              ❮
            </a>
            <a href="#slide3" className="text-blue-600 md:text-2xl">
              ❯
            </a>
          </div>
          <div className="absolute md:bottom-44 bg-gray-500 bottom-5 left-0 w-full bg-opacity-40 py-4">
            <Fade cascade damping={0.5}>
              <h2 className="md:text-2xl text-xs text-white text-center font-bold">
                I trust them with my family's health-
                <span className="text-blue-600">
                  <Typewriter words={["highly recommended!."]} loop={0} />
                </span>
              </h2>
            </Fade>
          </div>
        </div>
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <video
            ref={videoRefs[2]}
            src={video3}
            className="lg:h-[715px] w-full object-cover"
            loop
            muted
          ></video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-blue-600 md:text-2xl">
              ❮
            </a>
            <a href="#slide1" className="text-blue-600 md:text-2xl">
              ❯
            </a>
          </div>
          <div className="absolute md:bottom-44 bg-gray-500 bottom-5 left-0 w-full bg-opacity-40 py-4">
            <Fade cascade damping={0.5}>
              <h2 className="md:text-2xl text-xs text-white text-center font-bold">
                Need Help?
                <span className="text-blue-600">
                  <Typewriter
                    words={["Contact Our Pharmacy Experts Now!"]}
                    loop={0}
                  />
                </span>
              </h2>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
