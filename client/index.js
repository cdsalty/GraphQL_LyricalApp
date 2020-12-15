import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";

// new instance of Client, assigned as an empty object, that is passed to Apollo Provider
// ApolloClient will assume it's available on the '/graphql' route, such as http://localhost:4000/graphql (based on the middleware setup on backend)
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));

/*
Apollo Setup
- start by refactoring the root component to create a new Apollo Cient and setup the Apollo Provider
  - import ApolloClient (what's actually communicating with the server on the backend; it's what makes requests for data and then storing that data (locally) when the response comes back)
  - import { ApolloProvider } from 'react-apollo';
      --> The React-Apollo packacke knows how to work with a client and react, it takes care of being the glue-layer inside the application.
  
  - refactoring:
    return(
      <ApolloProvider client = {client}>
        <div>Lyrical App</div>
      </ApolloProvider>
    ) 
      -> once doing this, go back and create a new instance of the Apollo Client and pass it to the ApolloProvider
        <ApolloProvider client = {client}>
          <div>Lyrical App</div>
        </ApolloProvider>

The complete steps to getting Apollo to interact with the backend server
- import ApolloClient from 'apollo-client'; 
- import { ApolloProvider } from 'react-apollo';
- const client = new ApolloClient({});
- return (
    <ApolloProvider client = {client} />
      <div>Lyrical App</div>
    <ApolloProvider />
  )

  ** Note: ApolloClient will assume it's available on the '/graphql' route, such as http://localhost:4000/graphql (based on the middleware setup on backend) **
  app.use('/graphql', expressGraphQL({
    schema, graphiql: true
  }));
*/
