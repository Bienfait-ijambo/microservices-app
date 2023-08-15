import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
// import { json } from 'body-parser';


const app = express();

app.enable('trust proxy')


app.get('/auth/login', (req, res) => {
  res.send({message:'login'})
})

app.get('/auth/users', (req, res) => {
  res.send({message:'users'})
})

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The auth',
      author: 'Kate auth',
    },
    {
      title: 'auth',
      author: 'auth',
    },
  ];


const resolvers = {
    Query: {
      books: () => books,
    },
  };

 
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(express.json());
  // auth/graphql
  app.use(
    '/auth/graphql',
    cors(),
    // json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  const PORT=6000
  
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}/auth/graphql`);