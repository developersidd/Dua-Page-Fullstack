import { useEffect, useRef, useState } from "react";
import Icon from "../common/Icon";

const DuaAudio = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      console.log(
        "audio.currentTime === audio.duration:",
        audio.currentTime === audio.duration
      );
      if (audio.currentTime === audio.duration) {
        setPlay(false);
      }
    };

    audio?.addEventListener("timeupdate", updateTime);

    return () => {
      audio?.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const handlePlayPause = () => {
    setPlay(!play);
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  return (
    <div>
      {audioSrc && (
        <div className="flex items-center gap-5">
          <button className="outline-none" onClick={handlePlayPause}>
            <Icon
              classes={"size-10"}
              name={`${!play ? "audiobtn" : "pause"}.svg`}
            />
          </button>
          <audio ref={audioRef} src={audioSrc}></audio>
          {play && (
            <>
              <input
                type="range"
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSeek}
                className={`bg-no-repeat bg-gradient-to-t  from-primary to-primary w-18 h-[6px]  bg-gray-300 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-[15px]  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary`}
                style={{
                  backgroundSize: `${(currentTime / duration) * 100}% 100%`,
                }}
              />
              <div className="text-l text-gray-500">
                {formatTime(duration - currentTime)}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DuaAudio;
