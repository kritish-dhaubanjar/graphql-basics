const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Category {
        id: Int!
        name: String!
        slug: String!
        color: String!
        topics: [Topic]
    }

    type Topic {
        id: Int!
        slug: String!
        body: String!
        type: String!
        title: String!        
        user: User!
        category: Category!
    }

    type User {
        id: Int!
        name: String!
        email: String!
        topics: [Topic]!
    }

    type RootQuery {
        """
        Superset of Topics
        """
        categories: [Category]!

        """
        Topic by authors
        """
        topics: [Topic]!

        """
        Members of forum
        """
        users: [User]!
    }

    type RootMutation {
        mutateType(topic_id:Int!, topic_type:String!): Topic!
    }
   
    schema {
        query: RootQuery,
        mutation: RootMutation,
    }
`);

module.exports = schema;
