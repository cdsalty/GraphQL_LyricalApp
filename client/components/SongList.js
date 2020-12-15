// import React, { Component } from "react";
import gql from "graphql-tag"; // helper to write component queries
import { graphql } from "react-apollo"; // react-apollo library is similar to the glue layer of the data source to help bond a component with an actual query

// Functional Component route...
// const SongList = ({ data }) => {
//   console.log(data);
//   console.log(data.loading);
//   const renderSongs = data => {
//     if (data.loading === true) {
//       return <div>Loading...</div>;
//     } else {
//       return <div>Not Loading</div>;
//     }
//   };
//   return data.songs.map(song => {
//     return <li>{song.title}</li>;
//   });
// };

// // Define Query (will not 'excute' the query)
// // const query = gql`
// //   {
// //     songs {
// //       title
// //     }
// //   }
// // `;

// // graphql(query) provides the 'data' in the data.songs ...
// export default graphql(query)(SongList);

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
