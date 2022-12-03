/**
 * EXAMPLE 1
 */
// require('dotenv').config({ path: "./config/.env" });

// const express = require('express')
// const mongoose = require('mongoose');
// const { graphqlHTTP } = require('express-graphql');
// const graphql= require('graphql');
// const cors = require('cors');

// // For example
// // https://api.fishingnow.app/graphql/

// const app = express()

// mongoose.connect(
//   process.env.MONGO_URI, 
//   { useUnifiedTopology: true, useNewUrlParser: true }, 
//   () => console.log(`Mongodb is connected on ${process.env.MONGO_URI}`)
// );

// app.use(cors());

// const PORT = process.env.PORT || 8015

// // app.use('/graphql', graphqlHTTP({
// //     schema: new GraphQLSchema({query: RootQueryTodo, mutation: RootTodoMutation}),
// //     graphiql: true
// // }));

// app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))


/**
 * EXAMPLE 2
 * 
 * TRY TO REMOVE
 * 
    "express": "^4.18.2",
    "express-graphql": "^0.12.0",
 */
require('dotenv').config({ path: "./config/.env" });

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8015;

mongoose.connect(
  process.env.MONGO_URI, 
  { useUnifiedTopology: true, useNewUrlParser: true }, 
  () => console.log(`Mongodb is connected on ${process.env.MONGO_URI}`)
);

// 1
const typeDefs = `
  type Query {
    info: String!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => `This is iOlld test`
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen( PORT ).then(({ url }) => console.log(`Server is running on ${url}`));





/**
 * EXAMPLE 3
 */
// require('dotenv').config({ path: "./config/.env" });
// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const mongoose = require("mongoose");
// // const typeDefs = require("./typeDefs");
// // const resolvers = require("./resolvers");
  
// //Database Connection  
// const DBPORT = process.env.MONGO_URI;
// mongoose.connect(
//   DBPORT,
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   },
//   () => console.log(`DB CONNECTED *${DBPORT}*`)
// );
  
// const startServer = async () => {
//   const PORT = process.env.PORT || 8015;
//   // 1
//   const typeDefs = `
//     type Query {
//       info: String!
//     }
//   `
//   // 2
//   const resolvers = {
//     Query: {
//       info: () => `This is iOlld test x`
//     }
//   }
//   const app = express();
//   const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });
//   await apolloServer.start();
//   apolloServer.applyMiddleware({ app: app });
//   app.listen(PORT, () => console.log(`Server UP & RUnning *${PORT}*`));
// };
// startServer();