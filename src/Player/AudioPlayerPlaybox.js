import React, { useEffect, useState } from "react";
import "./AudioPlayer.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useDispatch, useSelector } from "react-redux";
import { userPlayUrl } from "../slicers/userDataSlice";
import { isMobile } from "../DeviceHelper";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const AudioPlayerPlaybox = ({ image, trackName, artists, preview_url }) => {
  const [audio, setAudio] = useState("");
  const [timeline, setTimeline] = useState("");
  const [currentIndex, setCurrentIndex] = useState(1);
  const [audioDuration, setAudioDuration] = useState("00:00");
  const [audioCurrent, setAudioCurrent] = useState("00:00");
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [mute, setMute] = useState(false);

  // const [volumeState,setVolume] = useState("")
  const [audioControl, setAudioControl] = useState(true);
  const playId = useSelector((store) => store.userInfo.playUrl);
  const dispatchNext = useDispatch();
  const playIdDispatch = useDispatch();
  const playIdMax = useSelector((store) => store.userInfo.playIDMax);

  useEffect(() => {
    setAudio(window.document.querySelector("audio"));
    setTimeline(window.document.querySelector(".timeline"));
    // setVolume(window.document.querySelector(".volume"));
    setAudioControl(true)
  }, [playId]);

  function changeTimelinePosition() {
    const percentagePosition = (100 * audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;

    getaudioDuration();
  }

  let getaudioDuration = () => {
    let minutes = "0" + Math.floor(audio.currentTime / 60);
    let seconds = "0" + (audio.currentTime - minutes * 60);
    setAudioCurrent(minutes.substring(-2) + ":" + Math.ceil(seconds));

    minutes = "0" + Math.floor(audio.duration / 60);
    seconds = "0" + (audio.duration - minutes * 60);
    setAudioDuration(minutes.substring(-2) + ":" + Math.ceil(seconds));
  };

  function changeSeek(value) {
    const time = (value * audio.duration) / 100;
    audio.currentTime = time;
  }
  if (audio != "") {
    audio.ontimeupdate = changeTimelinePosition;
  }
  const playAudio = () => {
    audio.play();
    setAudioControl(true);
  };

  const pauseAudio = () => {
    audio.pause();
    setAudioControl(false);
  };

  const loopTrack = (loopFlag) => {
    audio.loop = loopFlag;
    setLoop(loopFlag);
  };

  const shuffleTrack = (shuffleFlag) => {
    setShuffle(shuffleFlag);
  };

  // const changeVolumePosition = () => {
  //   audio.volume = volumeState.volume / 100;
  //   const percentagePosition = (100 * audio.volume) / audio.duration;
  //   volumeState.style.backgroundSize = `${percentagePosition}% 100%`;
  //   volumeState.value = percentagePosition;
  // };
  // if (volumeState != "") {
  // audio.volume = changeVolumePosition;
  // }
  // const changeVolume = (volumeValue) => {
  //   const time = (volumeValue * audio.volume) / 100;
  //   audio.volume = time;
  //   console.log(audio.volume)
  // }
  console.log("playIdOuter ", playId);
  const nextSong = () => {
    console.log(playIdMax, " ", playId);
    if (playIdMax > playId) {
      dispatchNext(userPlayUrl(playId + 1));
    } else if (playIdMax == playId) {
      dispatchNext(userPlayUrl(0));
    }
  };

  const previousSong = () => {
    console.log("playId ", playId);
    if (playId == 0) {
      dispatchNext(userPlayUrl(playIdMax));
    } else {
      dispatchNext(userPlayUrl(playId - 1));
    }
  };
  const getShuffledSong = () => {
    setCurrentIndex(Math.floor(Math.random() * playIdMax) + 1);
    console.log("shuffleId ===> ", Math.floor(Math.random() * playIdMax) + 1);
    playIdDispatch(userPlayUrl(currentIndex));
  };

  const volumeControl = (volumeState) => {

    audio.muted = volumeState
    setMute(volumeState)
  }
  

  return (
    <div className="audioplayer">
      <div className="audioplayer-details">
        <img src={image} className="audioplayer-details-image" />

        <div className="audioplayer-details-songdetails">
          <span className="audioplayer-details-songName">{trackName}</span>

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

      <div className="audioplayer-control-layout">
        <div className="audioplayer-control-options">
          <ShuffleIcon
            className={
              "audioplayer-control-iconRepeat " +
              (shuffle && "audioplayer-control-iconActive")
            }
            onClick={() => shuffleTrack(!shuffle)}
          />
          <SkipPreviousIcon
            className="audioplayer-control-icon"
            onClick={() => {
              previousSong();
            }}
          />
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

          <SkipNextIcon
            className="audioplayer-control-icon"
            onClick={() => {
              nextSong();
            }}
          />
          <RepeatIcon
            className={
              "audioplayer-control-iconRepeat " +
              (loop && "audioplayer-control-iconActive")
            }
            onClick={() => loopTrack(!loop)}
          />
        </div>

        <div className="audioplayer-range-layout">
          {!isMobile && (
            <span className="audioplayer-range-text">{audioCurrent}</span>
          )}
          <input
            type="range"
            className="timeline"
            max="100"
            value="50"
            style={{ width: `${audio.ontimeupdate} 100%;` }}
            onChange={(e) => changeSeek(e.target.value)}
          />

          {!isMobile && (
            <span className="audioplayer-range-text">{audioDuration}</span>
          )}
        </div>
      </div>

      {!isMobile() && (
        
        <div className="audioplayer-volume-layout">
         {mute ? <VolumeOffIcon onClick={()=>volumeControl(!mute)}/> : <VolumeUpIcon onClick={()=>volumeControl(!mute)}/>}
          <input
          type="range"
          className="volume"
          max="100"
          value="50"

          // onChange={(e) => changeVolume(e.target.value)}
        />
        </div>
      )}

      <audio
        src={preview_url}
        onEnded={() => shuffle && getShuffledSong()}
        // controls
        autoPlay
        className="audioplayer-audio-player"
      ></audio>
    </div>
  );
};

export default AudioPlayerPlaybox;
