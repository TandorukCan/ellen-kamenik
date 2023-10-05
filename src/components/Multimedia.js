import React from "react";
import Video1 from "../assets/GifsNvideos/Video1.mp4";
import ORII from "../assets/GifsNvideos/ORII.gif";
import Video2 from "../assets/GifsNvideos/Video2.mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Multimedia() {
  return (
    <section className="Multimedia">
      <h1>Multimedia Animation & motion graphics</h1>
      <Video
        autoPlay
        loop
        muted
        controls={[]}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={Video1} type="video/mp4" />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
        />
      </Video>
      <img src={ORII} alt="" />
      <Video
        autoPlay
        loop
        muted
        controls={[]}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src={Video2} type="video/mp4" />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
        />
      </Video>
    </section>
  );
}
export default Multimedia;
