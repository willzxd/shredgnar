const express = require('express');
const mongoose = require('./config/mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const app = express();

mongoose();

app.use('*', cors());

const shredGnarSchema = require('./graphql/index').shredGnarSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: shredGnarSchema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
