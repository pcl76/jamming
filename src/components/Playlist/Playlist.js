import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css"

const Playlist = () => {


  return (
    <div className="Playlist">
        <input></input>
        <TrackList />
        <button className="Playlist-save">Save to Spotify</button>
    </div>
  );
};

export default Playlist;