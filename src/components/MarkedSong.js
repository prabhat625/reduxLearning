import React from "react";
import { connect } from "react-redux";

const MarkedSong = ({ song }) => {
  if (!song) {
    return <div>select song</div>;
  }

  return <div> {song.title} </div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(MarkedSong);
