import React, { useRef, useState, useEffect } from "react";
import "boxicons";

function Video({ key, id, url, title, shortContainerRef }) {
  const videoRef = useRef();
  const playPauseRef = useRef();

  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isplaying, setIsPlaying] = useState(true);

  useEffect(() => {
    shortContainerRef.current.addEventListener("scroll", handleVideo);
    setIsPlaying(!videoRef.current.paused);
    setIsMuted(videoRef.current.muted);
    window.addEventListener("blur", () => {
      if (isActiveVideo(videoRef)) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    });

    window.addEventListener("focus", () => {
      if (isActiveVideo(videoRef)) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    });
  }, [shortContainerRef]);

  async function handleVideo() {
    const videoTop = videoRef.current.getBoundingClientRect().top;

    if (videoTop > 0 && videoTop <= 150) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        setIsPlaying(false);
        videoRef.current.pause();
      }
    } else {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  }

  return (
    <div
      key={key}
      className="snap-start h-[80vh] relative shadow-xl rounded-md mb-5"
    >
      <div className="w-[400px] h-full rounded-md border bg-black">
        <video
          ref={videoRef}
          onClick={(e) => {
            if (!isplaying) {
              videoRef.current.play();
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }}
          src={url}
          loop
          className="w-full h-full rounded-md object-contain"
        ></video>
      </div>
      <div className=" w-full px-5 absolute bottom-3 left-0 text-white space-y-1">
        <p className="text-gray-300">{title}</p>
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/79178437?s=400&u=cff256e8ef77217e73d6645b4d4e4ce32f3f114b&v=4"
              alt="  "
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <span className="cursor-pointer">therogersak</span>
          </div>
          <div className="ml-auto">
            <button className="bg-blue-500 py-2 px-4 rounded-md font-bold">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-3 left-0 flex items-center justify-between px-5">
        <box-icon name={!isplaying ? "play" : "pause"} color="gray"></box-icon>
        <div
          onClick={() => {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
          }}
        >
          <box-icon
            name={!isMuted ? "volume-full" : "volume-mute"}
            color="gray"
          ></box-icon>
        </div>
      </div>
    </div>
  );
}

function isActiveVideo(videoRef) {
  const videoTop = videoRef.current.getBoundingClientRect().top;
  return videoTop > 0 && videoTop <= 150;
}

export default Video;
