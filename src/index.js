const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const resolver = require("./graphql/resolver");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
    customFormatErrorFn: (error) => {
      if (!error.originalError) return error;
      else {
        return {
          message: error.originalError.message || "Oops! Something went wrong.",
          status: error.originalError.code || 500,
          data: error.originalError.data,
        };
      }
    },
  })
);

app.listen(8000, () => {
  console.log("graphql-basics listening @ 127.0.0.1:8000");
});
