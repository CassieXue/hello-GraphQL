const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraqhQLString, GraqhQLSchema } = require('graphql');

const books = [
  { name: "算法导论", genre: "计算机科学", id: "1" },
  { name: "人性的弱点", genre: "社交", id: "2" },
  { name: "明朝那些事儿", genre: "历史", id: "3" }
]

const BookType = GraphQLObjectType({
  name: "Book",
  field: () => ({
    id: { type: GraqhQLString },
    name: { type: GraqhQLString },
    genre: { type: GraqhQLString }
  })
})

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  field: {
    book: {
      type: BookType,
      args: { id: { type: GraqhQLString } },
      resolve(parent, args) {
        // 从哪里得到数据，比如数据库或其他来源
        // Mongodb mysql postgresql
        _.find(books, { id: args.id })
      }
    }
  }
})

module.exports = new GraqhQLSchema({
  query: RootQuery
});
