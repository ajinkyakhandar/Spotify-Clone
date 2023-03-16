import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { dummyPlayBox } from "../services/UserData";
import "./AudioPlayer.css";
import AudioPlayerPlaybox from "./AudioPlayerPlaybox";
import { isMobile } from "../DeviceHelper";
import AudioPlayerPlayboxMobile from "./AudioPlayerPlayboxMobile";

const AudioPlayer = () => {
  const playlist = useSelector((store) => store.userInfo.playlistIdDetails);
  // const recentlyPlayedData = useSelector((store) => store.recentPlaylistInfo.recentPlaylistData)
  const playId = useSelector((store) => store.userInfo.playUrl);

  useEffect(() => {}, [playlist, playId]);

  console.log(playlist, " - ", playId, " - ", isMobile());

  return (
    <>
      {isMobile() ? (
        playlist != null && playId != null ? (
          <AudioPlayerPlayboxMobile
            image={playlist.tracks?.items[playId].track.album.images[0].url}
            trackName={playlist.tracks?.items[playId].track.name}
            artists={playlist.tracks?.items[playId].track.artists}
            preview_url={playlist.tracks.items[playId].track.preview_url}
          />
        ) : (
          <AudioPlayerPlayboxMobile
            image={dummyPlayBox.image}
            trackName={dummyPlayBox.trackName}
            artists={dummyPlayBox.artists}
            preview_url={dummyPlayBox.preview_url}
          />
        )
      ) : playlist != null && playId != null ? (
        <AudioPlayerPlaybox
          image={playlist.tracks?.items[playId].track.album.images[0].url}
          trackName={playlist.tracks?.items[playId].track.name}
          artists={playlist.tracks?.items[playId].track.artists}
          preview_url={playlist.tracks.items[playId].track.preview_url}
        />
      ) : playlist != null && playId == null ? (
        <AudioPlayerPlaybox
          image={playlist.tracks?.items[0].track.album.images[0].url}
          trackName={playlist.tracks?.items[0].track.name}
          artists={playlist.tracks?.items[0].track.artists}
          preview_url={playlist.tracks.items[0].track.preview_url}
        />
      ) : (
        <AudioPlayerPlaybox
          image={dummyPlayBox.image}
          trackName={dummyPlayBox.trackName}
          artists={dummyPlayBox.artists}
          preview_url={dummyPlayBox.preview_url}
        />
      )}
    </>
  );
};

export default AudioPlayer;
