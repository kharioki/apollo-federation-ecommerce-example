const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
const { readFileSync } = require('fs');

const supergraphSchema = readFileSync('./supergraph.graphql').toString();

// initialize a new Apollo gateway and pass it the complete composed schema for our supergraph
const gateway = new ApolloGateway({
  supergraphSdl: supergraphSchema
});

// initialize Apollo Server and pass our gateway instance
const server = new ApolloServer({
  gateway,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => { console.error(err) });
