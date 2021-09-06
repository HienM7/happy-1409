/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Sound from "react-sound";

const Music = () => {
  const [status, setStatus]: ["STOPPED" | "PLAYING" | "PAUSED", any] =
    useState("PAUSED");

  const playMusic = () => {
    setStatus("PLAYING");
  };
  window.addEventListener("click", playMusic);

  return (
    <div className="music">
      <Sound playStatus={status} url="/music/mtp.mp3" volume={5} />
    </div>
  );
};

export default Music;
