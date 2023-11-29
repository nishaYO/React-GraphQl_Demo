const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Define resolver functions
const root = {
  message: () => 'Hello, GraphQL!'
};

// Create an Express server and use GraphQL middleware
const app = express();

// Enable CORS
app.use(cors());

app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: true }));

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
