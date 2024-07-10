const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDb = require("./config/db");
const app = express();
app.use(cors());
// connect to the db

connectDb();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, console.log("my port " + port));
