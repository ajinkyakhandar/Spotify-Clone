import React from 'react'
import { useDispatch } from 'react-redux'
import { userPlayUrl } from '../slicers/userDataSlice'

const PlaylistDesktop = ({playlists}) => {
  const playUrlDispatch = useDispatch()

  const setPlayUrl = (preview_url) => {
    playUrlDispatch(userPlayUrl(preview_url))
  }
  
  return (
    <>
        <table className="playlist-details-table">
        <thead>
          <tr className="playlist-details-table-textsm playlist-details-tableheader playlist-details-table-border">
            
            <td className="playlist-details-table-td playlist-details-table-index"> # </td>
            <td className="playlist-details-table-td">Title</td>
            <td className="playlist-details-table-td">Album</td>
            <td className="playlist-details-table-td">Date added</td>
            <td className="playlist-details-table-td">🕒</td>
          </tr>
        </thead>
        <tbody>
          {playlists.map((playlist, index) => {
            return (
              <tr key={playlist.track.id} tabIndex="0" className="playlist-details-item" onClick={()=>setPlayUrl(index)}>
                <td><span className="playlist-details-table-textsm playlist-details-table-index"> {index + 1} </span></td>
                <td className="playlist-details-title playlist-details-table-tr">
                  <img
                    className="playlist-details-TitleImage"
                    src={playlist.track.album.images[0].url}
                  />
                  <div className="playlist-details-TitleDetails ">
                    <span className="playlist-details-table-textbase">
                      {playlist.track.name}
                    </span>
                    <div>
                      {playlist.track.artists.map((artist) => (
                        <span className="playlist-details-table-textsm" key={artist.id}>
                          {artist.name} ,
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="playlist-details-table-textsm playlist-details-table-tr" >{playlist.track.album.name}</td>
                <td className="playlist-details-table-textsm playlist-details-table-tr">{playlist.added_at}</td>
                <td className="playlist-details-table-textsm playlist-details-table-tr">
                  {(playlist.track.duration_ms / 1000 / 60).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default PlaylistDesktop