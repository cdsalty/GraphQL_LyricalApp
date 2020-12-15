import React, { Component } from "react";
import gql from "graphql-tag"; // helper to write component queries

// Functional Component route...

import React from "react";

const SongList = () => {
  return <div>SongList</div>;
};

const query = gql`
  {
    songs {
      title
    }
  }
`;

// class SongList extends Component {
//   render() {
//     return <div>SongList</div>;
//   }
// }

// export default SongList;

export default SongList;

/*
SongList.js (fetch a list of songs and rendering on the screen)
- in the lesson, it was made with class based components. Will follow lesson but then change into hooks

*/
