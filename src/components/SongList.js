import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends Component {
  render() {
    return (
      <>
        <div> SongList </div>
        {this.props.songs.map((song) => {
          return (
            <>
              <div key={song.title}> {song.title} </div>
              <button onClick={()=> this.props.selectSong(song)}> Select </button>
              <br />
              <br />
            </>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
