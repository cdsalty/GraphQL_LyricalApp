import gql from "graphql-tag"; // helper to write component queries
import { graphql } from "react-apollo"; // react-apollo library is similar to the glue layer of the data source to help bond a component with an actual query

// Functional Component route...
const SongList = () => {
  return <div>SongList</div>;
};

// Defining the query (doesn't 'excute' the query)
const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);

/*
SongList.js (fetch a list of songs and rendering on the screen)
- in the lesson, it was made with class based components. Will follow lesson but then change into hooks

*/

// class SongList extends Component {
//   render() {
//     return <div>SongList</div>;
//   }
// }

// export default SongList;
