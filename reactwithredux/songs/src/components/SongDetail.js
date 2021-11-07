import React from "react";
import { connect } from "react-redux";

const SongDetails = ({ song }) => {
  return (
    <div>
      {song ? (
        <div>
          <h3>Details for:</h3>
          <p>
            Title:{song.title}
            <br />
            Duration: {song.duration}
          </p>
        </div>
      ) : (
        "Pick a song"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
