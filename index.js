const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');


const supergraphSchema = ''; // TODO!

const gateway = new ApolloGateway({

  supergraphSdl: supergraphSchema
});

const server = new ApolloServer({
  gateway,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => { console.error(err) });
