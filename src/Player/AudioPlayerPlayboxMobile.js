import React, { useEffect, useState } from "react";
import "./AudioPlayer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useSelector } from "react-redux";

const AudioPlayerPlayboxMobile = ({
  image,
  trackName,
  artists,
  preview_url,
}) => {
  const [audio, setAudio] = useState("");
  const [timeline, setTimeline] = useState("");
  const [audioControl, setAudioControl] = useState(true);
  const playId = useSelector((store) => store.userInfo.playUrl);

  useEffect(() => {
    setAudio(window.document.querySelector("audio"));
    setTimeline(window.document.querySelector(".timeline"));
    setAudioControl(true)
  },[playId]);

  function changeTimelinePosition() {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
  }

  if (audio != "") {
    audio.ontimeupdate = changeTimelinePosition;
  }

  function changeSeek(value) {
    const time = (value * audio.duration) / 100;
    audio.currentTime = time;
  }

  const playAudio = () => {
    audio.play();
    setAudioControl(true);
  };

  const pauseAudio = () => {
    audio.pause();
    setAudioControl(false);
  };

  console.log(image , " = ", trackName);

  return (
    <div className="audioplayer">
      <div className="audioplayer-layout">
        <div className="audioplayer-details">
          <img src={image} className="audioplayer-details-image" />

          <div className="audioplayer-details-songdetails">
            <div className="audioplayer-details-songNameLayout">
              <span className="audioplayer-details-songName">{trackName}</span>
            </div>

            <div className="audioplayer-details-artistlist">
              {artists.map((artist) => {
                return (
                  <span className="audioplayer-details-artist" key={artist.id}>
                    {artist.name} ,
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        {audioControl ? (
        <PauseCircleIcon
          className="audioplayer-control-iconPlayPause"
          onClick={() => {
            pauseAudio();
          }}
        />
      ) : (
        <PlayCircleIcon
          className="audioplayer-control-iconPlayPause"
          onClick={() => {
            playAudio();
          }}
        />
      )}
      </div>

      

      <input
        type="range"
        className="timeline"
        max="100"
        value="50"
        style={{ width: `${audio.ontimeupdate} 100%;` }}
        onChange={(e) => changeSeek(e.target.value)}
      />

      <audio
        src={preview_url}
        // controls
        autoPlay
        className="audioplayer-audio-player"
      ></audio>
    </div>
  );
};

export default AudioPlayerPlayboxMobile;
