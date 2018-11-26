const graphql = require('graphql');

const { GraphQLObjectType, GraqhQLString } = require('graphql');

const BookType = GraphQLObjectType({
  name: "Book",
  field: () => ({
    id: { type: GraqhQLString },
    name: { type: GraqhQLString },
    genre: { type: GraqhQLString }
  })
})
