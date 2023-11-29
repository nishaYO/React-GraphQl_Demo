import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

// Create a GraphQL client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// Define a GraphQL query
const GET_MESSAGE = gql`
  query {
    message
  }
`;

// Create a component that uses the query
function Message() {
  const { loading, error, data } = useQuery(GET_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>{data.message}</p>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>React GraphQL Demo</h1>
        <Message />
      </div>
    </ApolloProvider>
  );
}

export default App;
