// import React, { Component } from "react";
import gql from "graphql-tag"; // helper to write component queries
import { graphql } from "react-apollo"; // react-apollo library is similar to the glue layer of the data source to help bond a component with an actual query

// Functional Component route...

/*
SongList.js (fetch a list of songs and rendering on the screen)
- in the lesson, it was made with class based components. Will follow lesson but then change into hooks

*/

const SongList = ({ data }) => {
  const renderSongs = data => {
    return data.songs.map(song => {
      return <li>{song.title}</li>;
    });
  };
  // handled externally, doesn't need to be state
  if (data.loading) {
    return <div>Loading</div>;
  }
  return <div>{renderSongs(data)}</div>;
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);

/*
class based syntax converted to functional component above.
class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return <li>{song.title}</li>;
    });
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }
    return <div>{this.renderSongs()}</div>;
  }
}
const query = gql`
  {
    songs {
      title
    }
  }
`;
export default graphql(query)(SongList);



*/
