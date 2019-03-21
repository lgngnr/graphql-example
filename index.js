const graphql = require('express-graphql');
const express = require('express');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

const app = express();

app.use('/graphql', graphql({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
}));

app.listen(8080, () => console.log('Now browse to localhost:4000/graphql'));